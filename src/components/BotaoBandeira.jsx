import React, { useState } from 'react';

function BotaoBandeira({ fornecedor, cardBotao }) {

  const [classeTitulo, setClasseTitulo] = useState('Tituloonn');

  const alternarClasseTitulo = () => {
    setClasseTitulo(classeTitulo === 'Tituloonn' ? 'Titulooff' : 'Tituloonn');
  };
  cardBotao(classeTitulo)

  return (
    <div className={classeTitulo} onClick={alternarClasseTitulo}>
      <h2 className={`botaoTitulo ${fornecedor}`}>{fornecedor}</h2>
    </div>
  );
}

export default BotaoBandeira;
