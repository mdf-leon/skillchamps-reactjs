import React from 'react';

export default function CF(props: any) {
  return (
    <button
      onClick={(e) => {
        console.log('abacaxi');
        return props.onClick((e) => {});
      }}
    >
      botao teste
    </button>
  );
}
