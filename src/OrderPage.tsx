import React from 'react';
import {CustomersSearch} from './CustomersSearch';
import {ProductsSearch} from './ProductsSearch';
import {ProductsGrid} from './ProductsGrid';

export const OrderPage =() =>{

    const disableCustomer = () => {
        console.log('here');
        setVisibleCustomerSearch(false);
    }

    const disableProduct = () => {
        setVisibleProductsSearch(false);
    }

    const [isVisibileCustomerSearch, setVisibleCustomerSearch] = React.useState(true);
    const [isVisibileProductsSearch, setVisibleProductsSearch] = React.useState(true);
    const [isVisibileProductsGrid, setVisibleProductsGrid] = React.useState(false);

    React.useEffect( ()=>{
        setVisibleCustomerSearch(true);
        setVisibleProductsSearch(true);
        setVisibleProductsGrid(false);
    }, []);

    return (
        <div>
            <hr/>
            <h2>New Order</h2>
            <div className="row">
            <div className="col-md-4">
                {isVisibileCustomerSearch ? ( <button type="button" className="btn btn-primary" onClick={disableCustomer} >Ricerca Cliente</button>):null}
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                {isVisibileProductsSearch ? ( <button type="button" className="btn btn-primary" onClick={disableProduct} >Ricerca Prodotto</button>):null}
            </div>
            </div>
            <CustomersSearch/>
            <ProductsSearch/>
            <ProductsGrid/>
        </div>
    );
}