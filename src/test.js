// test.js
import ProductManager from './productManager.js';

const manager = new ProductManager();

// Agregar un producto
try {
  manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  console.log("Producto agregado con éxito.");
} catch (error) {
  console.error(error.message);
}

// Obtener la lista de productos
const products = manager.getProducts();
console.log("Products:", products);

// Intentar agregar un producto con el mismo código
try {
  manager.addProduct("producto repetido", "Este es un producto repetido", 150, "Otra imagen", "abc123", 10);
  console.log("Producto repetido agregado con éxito.");
} catch (error) {
  console.error(error.message);
}

// Obtener un producto por ID (cambia el ID por uno existente)
const productIdToFind = 1;
console.log("Product")
try {
  const product = manager.getProductById(productIdToFind);
  console.log("Producto encontrado:", product);
} catch (error) {
  console.error(error.message);
}
