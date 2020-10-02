/**
 * Arquivo: controllers/empresas.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas as empresas.
 */

const models = require("../models/index.model");
const Empresa = models.empresa;

const Op = models.Sequelize.Op;

const BAD_REQUEST = 400;
const SUCCESS = 200;


/**
 * Recupera todas as empresas de acordo com os parametros passados
 */
exports.getEmpresasByParams = (req, res) => {
    // parâmetros
    const uf = req.query.uf; // uf da empresa
    const limit = req.query.limit; // limite de empresas em cada requisição
    const start = req.query.start; // inicio da paginação
    var attributesList = []; // lista de atributos que serão recuperados
    if (req.query.attributes) attributesList = req.query.attributes.split(',');

    // monta as opções que serão inseridas no select
    option = {}
    
    let where = {};
    if (uf) {
        where.uf = uf;
    }
    option.where = where;

    if (attributesList.length > 0) {
        option.attributes = attributesList;
    }

    if (start) {
        option.offset = start;
    }
    
    if (limit) {
        option.limit = limit;
    }else {
        option.limit = 100000;
    }
    
    Empresa.findAndCountAll(option)
    .then(empresas => res.status(SUCCESS).json(empresas))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};

/**
 * Recupera empresa pelo CNPJ
 */
exports.getEmpresaByCNPJ = (req, res) => {
    const cnpj = req.params.cnpj
    console.log (cnpj)
    Empresa.findOne({ 
            where: {
                cnpj: cnpj
            }
        })
    .then(empresa => res.status(SUCCESS).json(empresa))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};
