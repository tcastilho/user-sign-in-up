const req = {
  headers: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzQyNzY1OTYsImV4cCI6MTU3Nzg0Mzk5OSwiYXVkIjoiZ2l0aHViLmNvbS90Y2FzdGlsaG8vdXNlci1zaWduLWluLXVwIiwiaXNzIjoiZ2l0aHViLmNvbS90Y2FzdGlsaG8vdXNlci1zaWduLWluLXVwIiwic3ViIjoiaHR0cHM6Ly9naXRodWIuY29tL3RjYXN0aWxoby8ifQ.6cCGd58XWcpO1Yzv8P1BlrgANnYxugcyYVaWAZ2-DTs',
    bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzQyNzY1OTYsImV4cCI6MTU3Nzg0Mzk5OSwiYXVkIjoiZ2l0aHViLmNvbS90Y2FzdGlsaG8vdXNlci1zaWduLWluLXVwIiwiaXNzIjoiZ2l0aHViLmNvbS90Y2FzdGlsaG8vdXNlci1zaWduLWluLXVwIiwic3ViIjoiaHR0cHM6Ly9naXRodWIuY29tL3RjYXN0aWxoby8ifQ.6cCGd58XWcpO1Yzv8P1BlrgANnYxugcyYVaWAZ2-DTs'
  },
  query: {
    user_id: '0f1274b0-56c3-11e9-977d-976185a5919f'
  },
  body: {
    nome: 'Thiago',
    email: 'thiago@castilho.com',
    senha: 'senha',
    telefones: [
      {
        numero: 123456789,
        ddd: 11
      }
    ]
  }
}