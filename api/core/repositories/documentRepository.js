/**
 * @description Class responsible for all queries in database
 * 
 * @author Thiago Castilho
 * @date 2019-02-17
 */
const db = require('../../../config'),
  status = require('../../helpers/enums')

class Queries {

  // Return only specified document number
  findUser(doc) {
    return new Promise((resolve, reject) => {
      db.find({document: doc}, (err, doc) => {
        if (err)
          reject(status.error)
        resolve(doc)
      })
    })
  }

  // Update or insert the document number, with status Blacklist
  updateBlacklisted(doc) {
    return new Promise((resolve, reject) => {
      db.update({
        document: doc
      }, {
        document: doc,
        status: status.blacklist
      }, {
        upsert: true
      }, (err, doc) => {
        if (err)
          reject(status.error)
        resolve(doc)
      })
    })
  }

  // Update or insert the document number, with status Whitelist
  updateWhitelisted(doc) {
    return new Promise((resolve, reject) => {
      db.update({
        document: doc
      }, {
        document: doc,
        status: status.whitelist
      }, {
        upsert: true
      }, (err, doc) => {
        if (err)
          reject(status.error)
        resolve(doc)
      })
    })
  }

}

module.exports = Queries