import BotaoBandeira from "../BotaoBandeira";
import CardLogin from "./CardLogin";
import Styles from "./Logins.module.css";
import { useState } from "react";

function Logins() {
    const [botaoClicado, setBotaoClicado] = useState("");
    // console.log(botaoClicado, "mehh")
    function setaBotaoClicado(fornecedor) {
        setBotaoClicado(fornecedor);
    }
    // console.log("original", botaoClicado)

    return (
        <div className="body" id="body">
            <div className="d-flex justify-content-center p-5">
                <div className={Styles.grupodeBotoesCriaLogin}>
                    <BotaoBandeira fornecedor="Otima" botaoSelecionado={botaoClicado} onClick={() => setaBotaoClicado("Otima")} />
                    <BotaoBandeira fornecedor="Zap2go" botaoSelecionado={botaoClicado} onClick={() => setaBotaoClicado("Zap2go")} />
                    <BotaoBandeira fornecedor="Robbu" botaoSelecionado={botaoClicado} onClick={() => setaBotaoClicado("Robbu")} />
                </div>
            </div>
            <div>
                <CardLogin fornecedor={botaoClicado} />
            </div>
        </div>
    );
}

export default Logins;
