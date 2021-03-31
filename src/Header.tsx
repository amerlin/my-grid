import React from 'react';
import { Link} from 'react-router-dom';

export const Header = () => (
    <div>
        <h2>ZMAG - Gestione Magazzino</h2>
        <Link to="/">Home Page</Link> |
        <Link to="/customers"> Customers</Link> |
        <Link to="/orders"> Orders |</Link>
        <Link to="/grid"> Grids |</Link>
    </div>
)