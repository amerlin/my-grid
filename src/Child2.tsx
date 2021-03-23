import React from 'react';

interface Props{
    name: string;
}

export const Child2 = (props:  Props) => { 
  return (
      <div>
        <h1>Hello, {props.name}</h1> 
      </div>
      );
}
