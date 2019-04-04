const transform = data => {
  return {
    id: data.id,
    data_criacao: data.data_criacao,
    data_atualizacao: data.data_atualizacao,
    ultimo_login: data.ultimo_login,
    token: data.token,
    nome: data.nome,
    email: data.email,
    telefones: data.telefones
  }
}

module.exports = {
  transform
}
