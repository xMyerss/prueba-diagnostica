# Florista API

API Restful para gestionar el catálogo de productos y pedidos de un vivero. Esta API permite a los usuarios consultar productos disponibles, agregar nuevos productos, y gestionar pedidos de manera eficiente.

## **Tecnologías Utilizadas**

- **Servidor:** Node.js con Express
- **Base de Datos:** MySQL
- **Documentación:** Postman

## **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- MySQL (versión 5.7 o superior)
- Postman (opcional, para pruebas y documentación)

## **Configuración de la Base de Datos**

1. **Instalación de MySQL:**
   - Instala MySQL desde su [página oficial](https://dev.mysql.com/downloads/installer/).
   - Asegúrate de configurar el servidor de MySQL y anotar el usuario y contraseña de administrador.

2. **Crear la Base de Datos y Tablas:**
   - Conéctate a tu servidor MySQL:
     ```bash
     mysql -u root -p
     ```
   - Crea la base de datos:
     ```sql
     CREATE DATABASE florista_db;
     ```
   - Usa la base de datos recién creada:
     ```sql
     USE florista_db;
     ```
   - Crea la tabla `productos`:
     ```sql
     CREATE TABLE productos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombre VARCHAR(255) NOT NULL,
       descripcion TEXT,
       precio DECIMAL(10, 2) NOT NULL,
       stock INT DEFAULT 0,
       imagen VARCHAR(255),
       disponible BOOLEAN DEFAULT true
     );
     ```
   - Crea la tabla `pedidos`:
     ```sql
     CREATE TABLE pedidos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       producto_id INT,
       cantidad INT NOT NULL,
       estado VARCHAR(50) DEFAULT 'pendiente',
       fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (producto_id) REFERENCES productos(id)
     );
     ```

## **Configuración del Proyecto**

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/xMyerss/prueba-diagnostica.git
   cd florista-api
   ```

2. **Instala las dependencias:**
    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**
    - Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de configuración:
        ```bash
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=tu_contraseña
        DB_NAME=florista_db
        DB_PORT=3306
        PORT=3000
        ```

4. **Inicia el servidor**
    ```bash
    npm start
    ```