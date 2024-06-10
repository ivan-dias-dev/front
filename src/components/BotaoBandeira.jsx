import React, { useState } from 'react';

function BotaoBandeira({ fornecedor, cardBotao }) {

  return (
    <button className={`botaoTitulo ${fornecedor}`}>{fornecedor}</button>
  );

}

export default BotaoBandeira;
