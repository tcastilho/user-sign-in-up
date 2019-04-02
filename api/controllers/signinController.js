/**
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const signinBO = require('../core/business-operation/signinBO'),
  logger = require('../helpers/utils/logger.js');

const controller = async (req, res) => {
  logger.info('signinController')
  try {
    const result = await signinBO.updateStatus(req)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  controller
}