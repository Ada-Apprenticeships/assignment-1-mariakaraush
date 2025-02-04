import validatePropertiesImput from './validatePropertiesImput.js'

class Product {
    #id;
    #name;
    #price;
    #quantity;
  
    constructor(id, name, price, quantity) {
      
      if (this.constructor === Product) {
        throw new Error("Can't instantiate an abstract class")
      }

      this.#id = validatePropertiesImput(id, "Id");
      this.#name = validatePropertiesImput(name, "Name");
      this.#price = validatePropertiesImput(price, "Price");
      this.#quantity = validatePropertiesImput(quantity, "Quantity");
    }
  
    get id() {
      return this.#id;
    }
    get name() {
      return this.#name;
    }
    get price() {
      return this.#price;
    }
  
    get quantity() {
      return this.#quantity;
    }
    
    set quantity(newQuantity) {
      this.#quantity = newQuantity;
    }
  
    getProductDetails() {
      return {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      };
    }
  }

  export {Product as default};
