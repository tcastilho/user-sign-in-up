/**
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const signupBO = require('../core/business-operation/signupBO'),
  logger = require('../helpers/utils/logger.js');

const controller = async (req, res) => {
  logger.info('signupController')
  try {
    const result = await signupBO.updateStatus(doc)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  controller
}