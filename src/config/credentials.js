/**
 * Arquivo: config/credentials.js
 * Descrição: arquivo responsável por recuperar as configurações de
 * cada banco de dados utilizado.
 */


// configurações dos bancos de dados
module.exports = {
    RECEITA_CNPJ: {
        dialect: "sqlite",
        storage: "/data/bd_dados_qsa_cnpj.db"
    } 
}