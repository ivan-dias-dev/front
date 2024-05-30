import React, { useState } from 'react';
import BotaoBandeira from "./BotaoBandeira";

function CardData({ Data, fornecedor, error }) {
  // Estado para controlar a classe secao
  const [secao, setSecao] = useState("secaoOnn");

  // Função para alterar a classe secao com base no botão clicado
  function cardBotao(card) {
    if (card === "Titulooff") {
      setSecao("secaoOff");
    } else {
      setSecao("secaoOnn");
      console.log(card);
    }
  }
  return (
    <section className="d-flex align-items-center justify-content-center">
      <div className="CardTotal">
        <div className="botaoPai">
          <BotaoBandeira fornecedor={fornecedor} cardBotao={cardBotao} />
        </div>
        <div id="Zap2go-section" className={secao}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Número</th>
                <th scope="col">Nome carteira</th>
                <th scope="col">Limite</th>
                <th scope="col">Qualidade</th>
                <th scope="col">Sinalização</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="5">Erro ao carregar dados: {error}</td>
                </tr>
              ) : Data.length > 0 ? (
                Data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.channelPhone || item.phone}</td>
                    <td>{item.wallet || item.wallet_name}</td>
                    <td>{item.channelLimit || item.rate}</td>
                    <td>{item.channelStatus || item.status}</td>
                    <td>{item.flViolada || item.armored}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Carregando...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CardData;
