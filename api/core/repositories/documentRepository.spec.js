const Queries = require('./documentRepository'),
  queries = new Queries();

describe('Test User Repository', () => {
  const user = {
    email: 'test@test.com',
    ultimo_login: new Date()
  }

  describe('queries.postUser()', () => {
    it ('Should return number', async (done) => {
      const result = await queries.postUser(user)
      expect(result.email).toEqual(user.email)
      done()
    })
  })
  
  describe('queries.getUser()', () => {
    it ('Should return array', async (done) => {
      const result = await queries.getUser({email: user.email})
      expect(typeof result).toBe('object')
      done()
    })
  })

  describe('queries.patchUser()', () => {
    it ('Should return number', async (done) => {
      const result = await queries.patchUser(user.email)
      expect(result).toEqual(1)
      done()
    })
  })
})