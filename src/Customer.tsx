import React from 'react';
import { useSearchParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Customer = () => {
    
    type FormData = {
        search: string;
    }
    
    const {register} = useForm<FormData>();
    
    const [searchParams] = useSearchParams();
    const criteria = searchParams.get('criteria') || '';

    return (
           <div>
            <h2>Nuovo cliente</h2>
            <br/>
            <input ref={register} name="search" type="text" placeholder="Search..." defaultValue={criteria}/>
           </div>
    );

}