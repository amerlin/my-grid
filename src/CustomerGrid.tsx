import React from 'react';
import { useSearchParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CustomerGrid = () => {
    
    const [searchParams] = useSearchParams();
    const criteria = searchParams.get('criteria') || '';
    const [search, setSearch] = React.useState(criteria);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearch(e.currentTarget.value);
    };

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
        console.log(search);
    }

    return (
            <div>
            <h2>Customer Grid</h2>
            <Link to="/new-customer"> Nuovo Cliente</Link> 
            </div>
    );

}