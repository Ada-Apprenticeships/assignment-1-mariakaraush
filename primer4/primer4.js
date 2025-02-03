import Product from "./Product.js";
import Inventory from "./Inventory.js";
import { ClothingProduct } from "./ClothingProduct.js";
import { ElectronicsProduct } from "./ElectronicsProduct.js";

// Sample usage
const inventory = new Inventory();
const product1 = new Product("A123", "T-shirt", 19.99, 100);
const product2 = new Product("B456", "Jeans", 49.99, 50);
const shirt = new ClothingProduct( "999", "Shirt", 20.99, 20, 13, "cotton")
const iron = new ElectronicsProduct("234", "iron", 29, 10, "Phillips", "2 years")

try {
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  inventory.addProduct(shirt);
  inventory.addProduct(iron);
  inventory.updateQuantity("A123", 50);
  // const retrievedProduct = inventory.getProduct("B456");
  // console.log(retrievedProduct);
  // console.log(inventory.getProduct("999"))
  // console.log(inventory.getProduct("234"))
  // inventory.removeProduct("A123");
  console.log(inventory.getNumOfItems())
  console.log(inventory.printProducts())
} catch (error) {
  console.error("An error occurred:", error.message);
}
