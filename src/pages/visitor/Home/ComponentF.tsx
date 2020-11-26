import React from 'react';

export default function CF(props: any) {
  return (
    <button
      name="AAAAAAAAAAA"
      onClick={(e) => {
        console.log('abacaxi');
        return props.onClick(e, "amor"); 
      }}
    >
      botao teste
    </button>
  );
}
