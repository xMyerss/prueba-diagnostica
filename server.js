const express = require('express');
const app = express();
require('dotenv').config();
const productosRoutes = require('./routes/productosRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');

// Middleware
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidosRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
