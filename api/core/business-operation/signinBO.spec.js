const signIn = require('./signinBO');

describe('Test Sign In BusinessOperation', () => {
  describe('loginUser()', () => {
    it ('Should return object', async (done) => {
      const user = {
        email: 'thiago@castilho.com',
        password: 'senha'
      }
      const result = await signIn.loginUser(user)
      expect(result.email).toEqual(user.email)
      done()
    })
    
    it ('Should return error', async (done) => {
      try {
        await signIn.loginUser('test@tested.com')
      } catch (err) {
        expect(typeof err).toBe('object')
        done()
      }
    })
  })
})