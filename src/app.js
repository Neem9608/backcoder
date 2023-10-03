
//app.js
import express from 'express';
import ProductManager from './productManager.js';

const app = express();
const port = 8080;
const manager = new ProductManager();

// Agregar productos manualmente
manager.addProduct("producto1", "Descripción del producto 1", 100, "imagen1.jpg", "code1", 10);
manager.addProduct("producto2", "Descripción del producto 2", 150, "imagen2.jpg", "code2", 5);

// Ruta para obtener la lista de productos
app.get('/products', (req, res) => {
  const products = manager.getProducts();
  res.json(products);
});

app.get('/products/:productId', (req, res) => {
  const productId = parseInt(req.params.productId); // Convertir el ID a un número entero
  const product = manager.getProductById(productId);

  if (product) {
    res.json(product); // Si se encuentra el producto, enviarlo como respuesta
  } else {
    res.status(404).json({ error: 'Producto no encontrado' }); // Si no se encuentra, enviar un mensaje de error y un código 404 (Not Found)
  }
});


app.listen(port, () => {
  console.log(`Servidor activo en el puerto ${port}`);
});
