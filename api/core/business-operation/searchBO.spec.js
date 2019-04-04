const search = require('./searchBO');

describe('Test Search BusinessOperation', () => {
  describe('getUser()', () => {
    it ('Should return the user', async (done) => {
      const req = {
        headers: {
          bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzQyNzY1OTYsImV4cCI6MTU3Nzg0Mzk5OSwiYXVkIjoiZ2l0aHViLmNvbS90Y2FzdGlsaG8vdXNlci1zaWduLWluLXVwIiwiaXNzIjoiZ2l0aHViLmNvbS90Y2FzdGlsaG8vdXNlci1zaWduLWluLXVwIiwic3ViIjoiaHR0cHM6Ly9naXRodWIuY29tL3RjYXN0aWxoby8ifQ.6cCGd58XWcpO1Yzv8P1BlrgANnYxugcyYVaWAZ2-DTs'
        },
        query: {
          user_id: 'df03d170-56cb-11e9-a50a-85367dc22aa4'
        }
      }
      const result = await search.getUser(req)
      expect(result.email).toEqual('thiago@castilho.com')
      done()
    })
    
    it ('Should return error', async (done) => {
      try {
        await search.getUser('thiago@castilho.com')
      } catch (err) {
        expect(typeof err).toBe('object')
        done()
      }
    })
  })
})