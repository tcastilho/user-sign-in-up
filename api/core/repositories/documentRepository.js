/**
 * @description Class responsible for all queries in database
 * 
 * @author Thiago Castilho
 * @date 2019-02-17
 */
const db = require('../../../config'),
  status = require('../../helpers/enums')

class Queries {

  // Create a user
  postUser(user) {
    return new Promise((resolve, reject) => {
      db.insert(user, (err, result) => {
        if (err)
          reject(err)
        resolve(result)
      })
    })
  }

  // Return queried user
  getUser(querie) {
    return new Promise((resolve, reject) => {
      db.find(querie, (err, result) => {
        if (err)
          reject(err)
        resolve(result)
      })
    })
  }

  // Update login time of queried user
  patchUser(user) {
    return new Promise((resolve, reject) => {
      db.update({
        email: user
      }, {
        email: user,
        ultimo_login: new Date()
      }, {
        upsert: false
      }, (err, doc) => {
        if (err)
          reject(err)
        resolve(doc)
      })
    })
  }

}

module.exports = Queries