var express = require('express');
var router = express.Router();

// Dados dos pães disponíveis
const paes = {
  'francês': {
    id: 'francês',
    nome: 'Pão Francês',
    preco: 1.50,
    descricao: 'Clássico pão francês crocante, ideal para o café da manhã',
    imagem: '/images/paes/frances.jpg'
  },
  'integral': {
    id: 'integral',
    nome: 'Pão Integral',
    preco: 2.50,
    descricao: 'Pão integral nutritivo e saudável, rico em fibras',
    imagem: '/images/paes/integral.jpg'
  }
};

/* GET pão específico */
router.get('/:tipo', function(req, res, next) {
  const tipo = req.params.tipo.toLowerCase();
  const pao = paes[tipo];
  
  if (!pao) {
    return next(new Error('Pão não encontrado'));
  }
  
  res.render('detalhes-pao', { pao: pao, title: pao.nome });
});

module.exports = router;
module.exports.paes = paes;
