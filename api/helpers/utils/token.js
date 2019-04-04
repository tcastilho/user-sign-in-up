const jwt = require('jsonwebtoken'),
secret = process.env.SECRET || 'secret'

const tokenValidation = token => {
  return new Promise((resolve, reject) => {
    try {
      const tokenObject = jwt.verify(token, secret)
      if (tokenObject.iat > tokenObject.exp)
        throw 'Token inválido'
      resolve(token)
    } catch (err) {
      reject({
        status: 401,
        message: {
          mensagem: err
        }
      })
    }
  })
}

module.exports = {
  tokenValidation
}
