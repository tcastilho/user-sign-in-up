const crypto = require('crypto')

/**
 * @description generates random string of characters i.e salt
 * @function genRandomString
 * 
 * @author Thiago Castilho
 * @date 2019-04-03
 * 
 * @param {number} length - Length of the random string.
 */
const genRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length)   /** return required number of characters */
}

/**
 * @description hash password with sha512.
 * @function secureHash
 * 
 * @author Thiago Castilho
 * @date 2019-04-03
 * 
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
const secureHash = (password, salt) => {
  const hash = crypto.createHmac('sha512', salt)
  hash.update(password)
  const value = hash.digest('hex')
  return {
    stringSalted: salt,
    passwordHash: value
  }
}

module.exports = {
  genRandomString,
  secureHash
}