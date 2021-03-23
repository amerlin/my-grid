import React from 'react';
import { Link} from 'react-router-dom';

export const Header =()=> (
    <div>
    <h2>HEADER</h2>
        <Link to="/">Home Page</Link> | 
        <Link to="/grid"> Prodotti</Link> | 
        <Link to="/customers"> Customers</Link> | 
        <Link to="/order-page"> Order</Link> | 
        <Link to="/notfound"> Pagina non trovata</Link>
    </div>
)