/**
 * Arquivo: config/db.config.js
 * Descrição: arquivo responsável por criar a conexão com o banco de dados.
 */

const { Sequelize } = require('sequelize');
const { RECEITA_CNPJ } = require("./credentials");

/**  Adiciona as configurações específicas de um banco. Caso seja necessário mudar
 o BD basta alterar os parâmetros do Sequelize.
*/
const sequelize = new Sequelize('database', 'username', 'password', RECEITA_CNPJ)

// Testa se a conexão foi estabelecida
run().catch(error => console.log(error.stack));
async function run() {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com o banco de dados ', RECEITA_CNPJ.dialect);
  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
}

module.exports = {
  sequelize
}
