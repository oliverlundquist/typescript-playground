import { ProductInterface } from '../../Models/Product/ProductInterface';

export interface ProductsInterface {

    /**
     * Current offset.
     *
     * @var number
     */
    offset: number;

    /**
     * Get a list of products.
     *
     * @param  number  offset
     * @return ProductInterface  products
     */
    all(offset: number): ProductInterface;
}
