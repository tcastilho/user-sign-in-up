/**
 * @description Get user to be logged in
 * 
 * @author Thiago Castilho
 * @date 2019-04-03
 */

const getTransform = require('../../helpers/transformers/readTransform'),
  queries = require('../repositories/documentRepository'),
  Queries = new queries()

const getUser = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userId = req.query.user_id,
        token = req.headers.bearer,
        result = await Queries.getUser({id: userId}),
        login = result[0].ultimo_login.getTime(),
        dateNow = new Date(),
        dateNowMilli = dateNow.getTime()

      if (token !== result[0].token)
        throw 'Não autorizado'

      if ((dateNowMilli - login) > 1800000)
        throw 'Sessão inválida'
      
      const response = getTransform.transform(result[0])
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
