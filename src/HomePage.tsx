import React from 'react';
import { getProductsAsync, ProductData } from './Products';
import { ProductList } from './ProductsList';
import {Child} from './Child';
import {Child2} from './Child2';

export const HomePage = () => {

    const [value, setValue] = React.useState("vuoto");

    const pulsante001onClick = (newValue:string) => {
        setValue(newValue);
    }

    return (
        <div>
            <h2>Benvenuto nella home page</h2>
            <Child name="modale" onChange={pulsante001onClick} />
            <hr/>
            <div>Valore iniziale: {value}</div>
            <Child2 name={value} />
        </div>
    );

};