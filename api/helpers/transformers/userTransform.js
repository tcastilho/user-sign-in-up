const transform = data => {
    return {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      telefones: phonesArray(data.telefones)
    }
  },
  phonesArray = data => {
    return data.map(phone => {
      return {
        numero: phone.numero,
        ddd: phone.ddd
      }
    })
  }

  module.exports = {
    transform
  }
  