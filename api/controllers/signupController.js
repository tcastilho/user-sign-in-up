/**
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const signupBO = require('../core/business-operation/signupBO'),
  userTransform = require('../helpers/transformers/userTransform'),
  token = require('../helpers/utils/token'),
  logger = require('../helpers/utils/logger')

const controller = async (req, res) => {
  logger.info('signupController')
  try {
    const tokenHash = await token.tokenValidation(req.headers.token),
      user = userTransform.transform(req.body),
      result = await signupBO.createUser(user, tokenHash)
    return res.status(201).json(result)
  } catch (err) {
    return res.status(err.status).json(err.message)
  }
}

module.exports = {
  controller
}