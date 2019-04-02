/**
 * @description Get user to be logged in
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 */

const queries = require('../repositories/documentRepository'),
  Queries = new queries()

const updateStatus = (doc) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doc || typeof doc !== 'number')
        throw 'Insira um número para o documento'
      await Queries.updateBlacklisted(doc)
      resolve(true)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  updateStatus
}
