
import { format } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"


import CardData from "./CardData";

import useZapData from "../hooks/useZapData";
import useRobbuData from "../hooks/useRobbuData";
import useOtimaData from "../hooks/useOtimaData";

function Bandeiras() {
    const { OtimaData, errorOtima } = useOtimaData();
    const { zapData, error } = useZapData();
    const { robbuData, errorRobbu } = useRobbuData();
    const date = new Date();
    const DateFormatted = format(date, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })
    const DateFormattedInText = "Atualizado em " + DateFormatted;

    
    let dadosGerais = [...OtimaData, ...zapData, ...robbuData]
    console.log(dadosGerais)
    return (
        <div className="body">
            <CardData Data={OtimaData} fornecedor="Otima" error={errorOtima} data={DateFormattedInText} />
            <CardData Data={zapData} fornecedor="Zap2go" error={error} />
            <CardData Data={robbuData} fornecedor="Robbu" error={errorRobbu} />
            <div className="d-flex align-items-center justify-content-center">
                <div className="CardTotal">
                    <div className="botaoPai">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Número</th>
                                    <th scope="col">Nome carteira</th>
                                    <th scope="col">Limite</th>
                                    <th scope="col">Qualidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {error ? (
                                    <tr>
                                        <td colSpan="5">Erro ao carregar dados: {error}</td>
                                    </tr>
                                ) : dadosGerais.length > 0 ? (
                                    dadosGerais.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.channelPhone || item.phone || item.numero}</td>
                                            <td >{item.wallet || item.wallet_name || item.centroCusto}</td>
                                            <td >{item.channelLimit || item.rate || item.limite}</td>
                                            <td>
                                                <div className="alinhaBolinha">
                                                    {item.channelQuality || item.saude || item.centroCusto || item.status}
                                                    {item.flViolada === "Sinalizado" || item.armored === true || item.channelFlag === "FLAGGED" || item.status === "Sinalizado" ? (
                                                        <div>Sinalizado   </div>
                                                    ) : ""}
                                                    <div className="pe-1 selects" id={item.channelQuality || item.saude || item.status}>
                                                    </div>
                                                </div>
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
            </div>
        </div>
    )
}

export default Bandeiras;
