import React from 'react';
import { ProductData } from './Products';

interface Props {
    data: ProductData[];
}

export const ProductList = (props: Props) =>  (
    <ul>
        {
            props.data.map((product)=> (<li key={product.productId}>{product.description}</li>))
        }
    </ul>
)