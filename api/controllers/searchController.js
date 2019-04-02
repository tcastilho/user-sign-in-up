/**
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 * 
 * @param {Object} req 
 * @param {Object} res 
 */

const searchBO = require('../core/business-operation/searchBO'),
  logger = require('../helpers/utils/logger.js');

const controller = async (req, res) => {
  logger.info('searchController')
  try {
    const result = await searchBO.updateStatus(req)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  controller
}