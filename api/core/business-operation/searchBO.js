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

const getUser = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userId = req.path.user_id,
        token = req.header.bearer,
        result = await Queries.findUser({id: userId}),
        login = result.ultimo_login.getTime(),
        dateNow = new Date(),
        dateNowMilli = dateNow.getTime()

      if (token !== result.token)
        throw 'Não autorizado'

      if ((dateNowMilli - login) > 1800000)
        throw 'Sessão inválida'
      
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
  getUser
}
