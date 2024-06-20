import React from 'react';

function BotaoBandeira({ fornecedor, onClick }) {
  return (
    <button className={`botaoTitulo ${fornecedor}`} onClick={onClick} >{fornecedor}</button>
  );
}

export default BotaoBandeira;
