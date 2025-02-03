// Import the necessary modules
import Product from './Product.js';
import Inventory from './Inventory.js';
import { ClothingProduct } from './ClothingProduct.js';
import { ElectronicsProduct } from './ElectronicsProduct.js';

describe('Inventory', () => {
  let inventory;
  let product1, product2, shirt, iron;

  beforeEach(() => {
    inventory = new Inventory();
    product1 = new Product("A123", "T-shirt", 19.99, 100);
    product2 = new Product("B456", "Jeans", 49.99, 50);
    shirt = new ClothingProduct("999", "Shirt", 20.99, 20, 13, "cotton");
    iron = new ElectronicsProduct ("234", "iron", 29, 10, "Phillips", "2 years",);
  });

  describe('Adding Products', () => {
    test('can add products to the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      expect(inventory.getNumOfItems()).toBe(2);
    });

    test('throws error when adding a product with a duplicate ID', () => {
      inventory.addProduct(product1);
      expect(() => inventory.addProduct(product1)).toThrowError(`Product with ID ${product1.id} already exists.`);
    });
  });

  
  describe('Updating Product Quantities', () => {
    test('can update the quantity of a product', () => {
      inventory.addProduct(product1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test('throws error when updating the quantity of a non-existent product', () => {
      expect(() => inventory.updateQuantity("C789", 75)).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Removing Products', () => {
    test('can remove a product from the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
      expect(inventory.getProduct("B456")).toEqual(product2.getProductDetails());
    });

    test('throws error when removing a non-existent product', () => {
      expect(() => inventory.removeProduct("C789")).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Retrieving Product Details', () => {
    test('can retrieve the details of products', () => {
        inventory.addProduct(product1);
        inventory.addProduct(product2);
        
        expect(inventory.getProduct("A123")).toEqual({
            id: "A123",
            name: "T-shirt",
            price: 19.99,
            quantity: 100
        });

        expect(inventory.getProduct("B456")).toEqual({
            id: "B456",
            name: "Jeans",
            price: 49.99,
            quantity: 50
        });
    });
  });

  describe('Adding clothing and electronic products', () => {
    test('can add new ClothingProduct', () => {
      inventory.addProduct(shirt);
      expect(inventory.getProduct("999").hasOwnProperty("size"));
      expect(inventory.getNumOfItems()).toBe(1);
    })

    test('can add new ElectronicProduct', () => {
      inventory.addProduct(iron);
      expect(inventory.getProduct("234").warranty).toBe("2 years")
      expect(inventory.getNumOfItems()).toBe(1);
    })
  })

  describe('Printing all products from inventory', () => {
    test('can display all products from inventory', () => {
      inventory.addProduct(shirt);
      inventory.addProduct(iron);
      console.log(inventory.printProducts())

      console.log = jest.fn();

      inventory.printProducts();

      expect(console.log).toHaveBeenCalledWith(
        {
          id: '999',
          name: 'Shirt',
          price: 20.99,
          quantity: 20,
          size: 13,
          material: 'cotton'
        }
      )
      expect(console.log).toHaveBeenCalledWith(
      {
        id: '234',
        name: 'iron',
        price: 29,
        quantity: 10,
        brand: 'Phillips',
        warranty: '2 years'
      }
      )
      expect(console.log).toHaveBeenCalledTimes(2)
    })
  })

 
});
