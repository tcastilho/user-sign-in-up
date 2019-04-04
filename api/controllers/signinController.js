/**
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const signinBO = require('../core/business-operation/signinBO'),
  token = require('../helpers/utils/token'),
  logger = require('../helpers/utils/logger.js')

const controller = async (req, res) => {
  logger.info('signinController')
  try {
    await token.tokenValidation(req.header.token)

    const email = req.body.email,
      password = req.body.senha
      user = {
        email,
        password
      },
      result = await signinBO.loginUser(user)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(err.status).json(err.message)
  }
}

module.exports = {
  controller
}