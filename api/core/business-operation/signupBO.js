/**
 * @description Create user in database
 * 
 * @author Thiago Castilho
 * @date 2019-04-03
 */

const uuid = require('uuid/v1'),
  postTransform = require('../../helpers/transformers/creationTransform'),
  getTransform = require('../../helpers/transformers/readTransform'),
  hashPass = require('../../helpers/utils/saltHash'),
  queries = require('../repositories/documentRepository'),
  Queries = new queries()

const createUser = (userData, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const search = await Queries.getUser({email: userData.email})
      if (search.length > 0)
        throw 'E-mail já existente'

      const security = hashPass.genRandomString(16),
        hashPassword = hashPass.secureHash(userData.senha, security)
        infoData = {
          id: uuid(),
          data_criacao: new Date(),
          data_atualizacao: new Date(),
          ultimo_login: new Date(),
          token,
          stringSalted: hashPassword.stringSalted
        }
      userData.senha = hashPassword.passwordHash
      const uTransform = postTransform.transform(infoData, userData)
      const result = await Queries.postUser(uTransform)
      const response = getTransform.transform(result)
      resolve(response)
    } catch (err) {
      reject({
        status: 401,
        message: {
          mensagem: err
        }
      })
    }
  })
}

module.exports = {
  createUser
}
