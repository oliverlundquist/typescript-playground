import { ProductsInterface } from './ProductsInterface';
import { ProductInterface } from '../../Models/Product/ProductInterface';

export class Products implements ProductsInterface {

    /**
     * Current offset.
     *
     * @var number
     */
    offset: number = 0;

    /**
     * Create new instances for dependencies.
     *
     * @param  number  offset
     * @return void
     */
    constructor(offset: number = 0) {
        this.offset = offset;
    }

    /**
     * Get a list of products.
     *
     * @param  number  offset
     * @return ProductInterface  products
     */
    all(offset: number = 0): ProductInterface {
        return { id: 1, product_name: 'hey', price: 200 };
    }
}
