
const models = require("../models/index.model");
const Empresa = models.empresa;


UFS = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", 
        "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

/**
 *  Verifica parâmetros
 */ 
exports.validaParameters = (req) => {
    const uf = req.query.uf;
    const limit = req.query.limit;
    var attributesList = []; // lista de atributos que serão recuperados

    if (req.query.attributes) attributesList = req.query.attributes.split(',');

    // verifica limite de empresas por consulta
    maxPorConsulta = 100000
    if (limit > maxPorConsulta) {
        throw new Error ('\nPARÂMETROS INVÁLIDOS:\nO limite por consulta é de 100000 empresas.');
    } 

    // verifica se a UF é valida
    if (uf && !UFS.includes(uf)){
        throw new Error ('\nPARÂMETROS INVÁLIDOS:\nA UF \''+ uf + '\' não existe.\nUtilize uma das seguintes UFs: '+ UFS);
    }

    // verifica se os atributos que serão recuperados existem na tabela 'cnpj_dados_cadastrais_pj'
    validAttributes = Object.keys(Empresa.rawAttributes) 
    for( let attrParam in attributesList ){
        if (!validAttributes.includes(attributesList[attrParam])){
            throw new Error ('\nPARÂMETROS INVÁLIDOS:\nO atributo \''+ attributesList[attrParam] + '\' não existe.\nUtilize atributos válidos: '+ validAttributes);
        }
    }
};
