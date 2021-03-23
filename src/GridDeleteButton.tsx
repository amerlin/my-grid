import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';

interface Props{
    id: number;
}

export const GridDeleteButton = (props: Props) => {
     const deleteElement = (prodId: number) => {
        console.log('Current value: '+prodId);
    }

    return (
        <Button onClick={()=>deleteElement(props.id)} >
            <BsFillTrashFill/>
        </Button>
    );

}