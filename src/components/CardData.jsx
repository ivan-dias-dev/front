import React, { useState } from 'react';
import BotaoBandeira from "./BotaoBandeira";
import styles from "./Card.module.css"

function CardData({ Data, fornecedor, error, data }) {
  const [secao, setSecao] = useState("secaoOnn");

  function cardBotao(card) {
    if (card === "Titulooff") {
      setSecao("secaoOff");
    } else {
      setSecao("secaoOnn");
    }
  }
  return (
    <section className="d-flex align-items-center justify-content-center">

      <div className="CardTotal">
        <div className="botaoPai">
          <BotaoBandeira fornecedor={fornecedor} cardBotao={cardBotao} />
          <div className="dataAtualizada">{data}</div>
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
                    <td className={styles.Numero}>{item.channelPhone || item.phone}</td>
                    <td className={styles.Nome}>{item.wallet || item.wallet_name}</td>
                    <td className={styles.Limite}>{item.channelLimit || item.rate}</td>
                    <td >
                      <div className="alinhaBolinha">
                        <div className={item.channelQuality || item.status}></div>
                        <div class="pe-1 selects" id={item.channelQuality || item.status}>{item.channelQuality || item.status}</div>
                      </div>
                    </td>
                    <td className={styles.Sinalicao}>
                      {item.flViolada === "Sinalizado" || item.armored === true || item.channelFlag === "FLAGGED" ? <div className={styles.alert}></div> : ""}
                    </td>

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
