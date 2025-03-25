const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/clientes');
const Pedido = require('./controllers/pedido');
const Telefone = require('./controllers/telefone');

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop API'});
});

router.post('/clientes', Cliente.create);
router.get('/clientes',Cliente.read);
router.patch('/clientes/:id', Cliente.update);
router.delete('/clientes/:id',Cliente.remove);

router.post('/pedido', Pedido.create);
router.get('/pedido', Pedido.read);
router.patch('/pedido/:id', Pedido.update);
router.delete('/pedido/:id', Pedido.remove);

router.post('/telefone', Telefone.create);
router.get('/telefone', Telefone.read);
router.patch('/telefone/:id', Telefone.update);
router.delete('/telefone/:id', Telefone.remove);

module.exports = router;