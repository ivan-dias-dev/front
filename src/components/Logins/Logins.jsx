import React, { useState } from "react";
import BotaoBandeira from "./Botao_Login/BotaoLogin";
import CardLogin from "./CardLogin";
import Styles from "./Logins.module.css";

function Logins() {
    const [botaoClicado, setBotaoClicado] = useState("");
    const [foiClicado, setfoiClicado] = useState(false);

    const handleButtonClick = (fornecedor) => {
        setBotaoClicado(fornecedor);
        setfoiClicado(true);
    };

    return (
        <div className="body" id="body">
            <div className="d-flex justify-content-center p-5">
                <div className={Styles.grupodeBotoesCriaLogin}>
                    <BotaoBandeira
                        fornecedor="Otima"
                        botaoSelecionado={botaoClicado}
                        foiClicado={foiClicado}
                        onClick={handleButtonClick}
                    />
                    <BotaoBandeira
                        fornecedor="Zap2go"
                        botaoSelecionado={botaoClicado}
                        foiClicado={foiClicado}
                        onClick={handleButtonClick}
                    />
                    <BotaoBandeira
                        fornecedor="Robbu"
                        botaoSelecionado={botaoClicado}
                        foiClicado={foiClicado}
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
            <div>
                <CardLogin fornecedor={botaoClicado} foiClicado={foiClicado} />
            </div>
        </div>
    );
}

export default Logins;
