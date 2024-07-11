import React, { useState } from 'react';
import Style from './Bandeiras.module.css';

function BotaoBandeira({ fornecedor, onClick }) {


  return (
    <>
      <button
        className={`${Style.botaoTitulo} ${fornecedor} `}
      >
        {fornecedor}
      </button>
    </>
  );
}

export default BotaoBandeira;
