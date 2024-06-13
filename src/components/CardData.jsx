import React, { useState, useEffect } from 'react';
import BotaoBandeira from "./BotaoBandeira";
import styles from "./Card.module.css";


function CardData({ Data, fornecedor, error, data }) {
  const [secao, setSecao] = useState("secaoOnn");
  const [classeTitulo, setClasseTitulo] = useState('Tituloonn');

  


  const alternarClasseTitulo = () => {
    const newClass = classeTitulo === 'Tituloonn' ? 'Titulooff' : 'Tituloonn';
    setClasseTitulo(newClass);
    setSecao(newClass === 'Titulooff' ? 'secaoOff' : 'secaoOnn');
  };

  return (
    <section className="d-flex align-items-center justify-content-center">
      <div className="CardTotal">
        <div className="botaoPai">
          <div className={classeTitulo} onClick={alternarClasseTitulo}>
            <BotaoBandeira fornecedor={fornecedor} />
          </div>
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
                    <td className={styles.Numero}>{item.channelPhone || item.phone || item.numero}</td>
                    <td className={styles.Nome}>{item.wallet || item.wallet_name || item.centroCusto}</td>
                    <td className={styles.Limite}>{item.channelLimit || item.rate || item.limite}</td>
                    <td>
                      <div className="alinhaBolinha">
                        <div className={item.channelQuality || item.saude || item.centroCusto || item.status}></div>
                        <div className="pe-1 selects" id={item.channelQuality || item.saude || item.status}>
                          {item.channelQuality || item.saude || item.status}
                        </div>
                      </div>
                    </td>
                    <td className={styles.Sinalicao}>
                      {item.flViolada === "Sinalizado" || item.armored === true || item.channelFlag === "FLAGGED" || item.status === "Sinalizado" ? (
                        <div className={styles.alert}></div>
                      ) : ""}
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
