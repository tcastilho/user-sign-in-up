const signUp = require('./signupBO');

describe('Test Sign Up BusinessOperation', () => {
  describe('createUser()', () => {
    it ('Should return true', async (done) => {
      try {
        const user = {
          nome: 'Thiago',
          email: 'tcastilho@castilho.com',
          senha: 'senha',
          telefones: [
            {
              numero: 123456789,
              ddd: 11
            }
          ]
        }
        const result = await signUp.createUser(user)
        expect(result.email).toEqual(user.email)
        done()
      } catch (err) {
        expect(err.message.mensagem).toEqual('E-mail já existente')
        done()
      }
    })
    
    it ('Should return error', async (done) => {
      try {
        await signUp.createUser('thiago@castilho.com')
      } catch (err) {
        expect(typeof err).toBe('object')
        done()
      }
    })
  })
})