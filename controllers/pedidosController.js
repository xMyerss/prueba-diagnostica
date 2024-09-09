const db = require('../config/db');

// Obtener todos los pedidos
exports.obtenerPedidos = (req, res) => {
  db.query('SELECT * FROM pedidos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Obtener un pedido por ID
exports.obtenerPedidoPorId = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM pedidos WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Pedido no encontrado' });
    res.json(results[0]);
  });
};

// Crear un nuevo pedido
exports.crearPedido = (req, res) => {
  const { producto_id, cantidad } = req.body;

  // Verificar que el producto exista y esté disponible
  db.query('SELECT * FROM productos WHERE id = ? AND disponible = TRUE', [producto_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Producto no disponible o no encontrado' });

    // Crear el pedido
    const query = 'INSERT INTO pedidos (producto_id, cantidad) VALUES (?, ?)';
    db.query(query, [producto_id, cantidad], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Pedido creado', id: result.insertId });
    });
  });
};

// Actualizar el estado de un pedido
exports.actualizarPedido = (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  const query = 'UPDATE pedidos SET estado = ? WHERE id = ?';
  db.query(query, [estado, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Pedido no encontrado' });
    res.json({ message: 'Estado del pedido actualizado' });
  });
};
