import { Products } from './Resources/Products/Products';

// bootstrap application
let products = new Products();
let offset = 0;

console.log( products.all(offset) );
