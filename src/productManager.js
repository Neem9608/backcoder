// productManager.js
class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const id = this.generateUniqueId();
    const isCodeRepeated = this.products.some(product => product.code === code);

    if (!isCodeRepeated) {
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
    } else {
      throw new Error('El código del producto está repetido.');
    }
  }
  // Genera un ID único
  generateUniqueId() {
    const id = Date.now();
    if (this.products.some(product => product.id === id)) {
      return this.generateUniqueId(); // Si el ID ya existe, genera otro
    }
    return id;
  }
  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      throw new Error('Producto no encontrado.');
    }
  }
}

export default ProductManager;
