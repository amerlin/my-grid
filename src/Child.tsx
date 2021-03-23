import React from 'react';

interface Props{
    onChange: Function;
    name: string;
}

export const Child = (props: Props) => { 

 const pulsante001onClick = () => {
        props.onChange('child2');
    }

  return (
      <div>
        <h1>Hello, {props.name}</h1> 
        <button type="button" className="btn btn-primary" onClick={pulsante001onClick} >Child Button</button>
      </div>
      );
}
