import Product from "./Product.js";
import Inventory from "./Inventory.js";
import { ClothingProduct } from "./ClothingProduct.js";
import { ElectronicsProduct } from "./ElectronicsProduct.js";

// Sample usage
const inventory = new Inventory();
const product1 = new ClothingProduct("A123", "T-shirt", 19.99, 100);
const product2 = new ClothingProduct("B456", "Jeans", 49.99, 50);
const shirt = new ClothingProduct( "999", "Shirt", '20.99', 20, 13, "cotton")
const iron = new ElectronicsProduct("234", "iron", 29, 10, "Phillips", "2 years")
const keyboard = new ElectronicsProduct("222", "keyboard", "kg", 10, "Phillips", "2 years")


try {
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  inventory.addProduct(shirt);
  inventory.addProduct(iron);
  inventory.updateQuantity("A123", 50);
  inventory.addProduct(keyboard)
  
  const retrievedProduct = inventory.getProduct("B456");
  console.log(retrievedProduct);
  console.log(inventory.getProduct("999"))
  console.log(inventory.getProduct("234"))
  inventory.removeProduct("A123");
  inventory.updateQuantity("999", 35);
  console.log(inventory.getNumOfItems())
  console.log(inventory.printProducts())
  console.log(inventory.getProduct("A123"))
  console.log(inventory.getProduct("222"))
} catch (error) {
  console.error("An error occurred:", error.message);
}
