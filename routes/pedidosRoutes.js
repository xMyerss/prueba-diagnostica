const express = require('express');
const router = express.Router();
const { obtenerPedidos, obtenerPedidoPorId, crearPedido, actualizarPedido } = require('../controllers/pedidosController');

router.get('/', obtenerPedidos);
router.get('/:id', obtenerPedidoPorId);
router.post('/', crearPedido);
router.patch('/:id', actualizarPedido);

module.exports = router;
