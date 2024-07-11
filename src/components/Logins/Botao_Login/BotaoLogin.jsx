import React from 'react';
import Style from './BotaoLogin.module.css';

function BotaoBandeira({ fornecedor, onClick, foiClicado, botaoSelecionado }) {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(fornecedor);
    }
  };

  return (
    <button
      className={`${Style.botaoTitulo} ${botaoSelecionado === fornecedor ? Style[fornecedor] : (foiClicado ? Style.unselectedBotao : Style.unselectedBotao)}`}
      onClick={handleButtonClick}>
      {fornecedor}
    </button>
  );
}

export default BotaoBandeira;
