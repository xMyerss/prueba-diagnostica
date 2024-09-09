const db = require('../config/db');

// Obtener todos los productos disponibles
exports.obtenerProductos = (req, res) => {
  db.query('SELECT * FROM productos WHERE disponible = TRUE', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Agregar un nuevo producto
exports.agregarProducto = (req, res) => {
  const { nombre, descripcion, precio, stock, imagen } = req.body;
  const query = 'INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nombre, descripcion, precio, stock, imagen], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Producto agregado', id: result.insertId });
  });
};
