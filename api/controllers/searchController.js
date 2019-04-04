/**
 * 
 * @author Thiago Castilho
 * @date 2019-04-04
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const searchBO = require('../core/business-operation/searchBO'),
  token = require('../helpers/utils/token'),
  logger = require('../helpers/utils/logger.js')

const controller = async (req, res) => {
  logger.info('signinController')
  try {
    await token.tokenValidation(req.header.token)
    
    const bearer = req.body.bearer,
      error = {
        status: 401,
        message: {
          mensagem: 'Não autorizado'
        }
      }
    if (bearer === '' || bearer === null || bearer === undefined)
      throw error
    
    const result = await searchBO.getUser(user)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(err.status).json(err.message)
  }
}

module.exports = {
  controller
}