class Product {
    #id;
    #name;
    #price;
    #quantity;
  
    constructor(id, name, price, quantity) {
      this.#id = id;
      this.#name = name;
      this.#price = price;
      this.#quantity = quantity;
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


class ClothingProduct extends Product {
    #size;
    #material;
    constructor(size, material, ...productProps){
        super(...productProps);
        this.#size = size;
        this.#material = material
    }

    get size () {
        return this.#size
    }

    get material() {
        return this.#material
    }

    getProductDetails() {
      return {
        ...super.getProductDetails(),
        size: this.size,
        material:this.material
       }
    }
}


class ElectronicsProduct extends Product {
    #brand;
    #warranty;
    constructor(brand, warranty, ...productProps){
        super(...productProps);
        this.#brand = brand;
        this.#warranty = warranty

    }

    get brand() {
        return this.#brand
    }

    get warranty() {
        return this.#warranty
    }

    getProductDetails() {
      return {
        ...super.getProductDetails(),
        barnd: this.brand,
        warranty:this.warranty
       } 
    }

}
  export {Product, ClothingProduct, ElectronicsProduct};
