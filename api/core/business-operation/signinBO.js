/**
 * @description Get user to be logged in
 * 
 * @author Thiago Castilho
 * @date 2019-04-03
 */

const hashPass = require('../../helpers/utils/saltHash'),
  getTransform = require('../../helpers/transformers/readTransform'),
  queries = require('../repositories/documentRepository'),
  Queries = new queries()

const loginUser = (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Queries.findUser({email: userData.email})
      if (result.length === 0)
        throw 'Usuário e/ou senha inválidos'

      const passwordVerification = hashPass.secureHash(userData.password, result.stringSalted)
      if (result.senha !== passwordVerification)
        throw 'Usuário e/ou senha inválidos'
      
      await Queries.patchUser(userData.email)
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
  loginUser
}
