/**
 * Arquivo: models/index.model.js
 * Descrição: arquivo responsável por importar os modelos com o sequelize.
 */

const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");

const empresaModel = "./empresa.model.js";

global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    // Adicione os módulos abaixo
    empresa: sequelize.import(empresaModel)
};

Object.keys(global.models).forEach(modelName => {
    if (global.models[modelName].associate !== undefined) {
      global.models[modelName].associate(global.models);
    }
  });

module.exports = global.models;