import React, { useState } from 'react';

function BotaoBandeira({ fornecedor, cardBotao }) {

  return (
    <div className={`botaoTitulo ${fornecedor}`}>{fornecedor}</div>
  );

}

export default BotaoBandeira;
