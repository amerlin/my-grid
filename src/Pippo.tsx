import React from 'react';
import { getProductsAsync, ProductData } from './Products';
import { ProductList } from './ProductsList';


export const Pippo = () => {

    //Esegue qualcosa quando cambia la variabile che ho inserito come secondo parametro 
    React.useEffect(()=>{
        const getP = async()=>{
            const prod = await getProductsAsync();
            setQuestions(prod);
            setProductsLoading(false);
        };
        getP();
    },[]);

    //imposta la variabile products
    const [
        products,
        setQuestions,
    ] = React.useState<ProductData[]>([]);
    
    //imposto il valore del loader
    const [
        productsLoading,
        setProductsLoading
    ] = React.useState(true);

    return (
        <div>
        {productsLoading?(<div>Loading...</div>):(<ProductList data={products || []}></ProductList>)}
        </div>
    );

};