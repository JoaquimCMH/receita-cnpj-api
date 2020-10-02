console.log('\n\n-------------------------------------------')
console.log('\x1b[36m%s\x1b[0m', 'Analytics-UFCG: REST API para consulta de informações públicas\nsobre empresas disponibilizadas pela Receita Federal. ');
console.log('-------------------------------------------\n')


const express = require('express');
const cors = require('cors');

const app = express();
const validacaoParameters = require('./middleware/parameters.validator');

const empresasRoute = require('./routes/empresas.routes');

const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

/**
 *  Middlewares
 */ 
app.use(function(req, res, next) {
  console.log('\nAcessando:  ', req.method, req.url,"\n");

  if ( req.path.includes("/api/empresas/") ) return next();

  // valida parametros recebidos
  validacaoParameters.validaParameters(req);

  next();
});

/**
 *  Rotas da API
 */ 
app.use('/api/', empresasRoute);


module.exports = app;

const port = 3000;

app.listen(port, () => {
  console.log('REST API sendo executando na porta ', port);
});
