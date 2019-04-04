const transform = data => {
  return {
    id: dataInfo.id,
    data_criacao: dataInfo.data_criacao,
    data_atualizacao: dataInfo.data_atualizacao,
    ultimo_login: dataInfo.ultimo_login,
    token: dataInfo.token,
    nome: data.nome,
    email: data.email,
    telefones: data.telefones
  }
}

module.exports = {
  transform
}
