const transform = (dataInfo, dataUser) => {
  return {
    id: dataInfo.id,
    data_criacao: dataInfo.data_criacao,
    data_atualizacao: dataInfo.data_atualizacao,
    ultimo_login: dataInfo.ultimo_login,
    token: dataInfo.token,
    security: dataInfo.stringSalted,
    ...dataUser
  }
}

module.exports = {
  transform
}
