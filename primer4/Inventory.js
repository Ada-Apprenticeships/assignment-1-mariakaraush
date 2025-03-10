class Inventory {
  #products;

  constructor() {
    this.#products = new Map();
  }

  addProduct(product) {
    if (this.#products.has(product.id)) {
      throw new Error(`Product with ID ${product.id} already exists.`);
    }
    this.#products.set(product.id, product);
  }

  updateQuantity(id, quantity) {
    const product = this.#products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    if (isNaN(quantity) || quantity < 0) {
      throw new Error(`${quantity} in not a valid quantity`);
    }
    product.quantity = quantity;
  }

  getProduct(id) {
    const product = this.#products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return product.getProductDetails();
  }

  removeProduct(id) {
    if (!this.#products.has(id)) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    this.#products.delete(id);
  }

  getNumOfItems() {
    return this.#products.size;
  }

  printProducts() {
    this.#products.forEach(item => {
      console.log(item.getProductDetails());
    });
  }
}

export default Inventory;