import BotaoBandeira from "./BotaoBandeira";
import Styles from "./Logins.module.css"

function Logins() {
    return (
        <div className="body" id="body">
            <div className="d-flex justify-content-center p-5">
                <div className={Styles.grupodeBotoesCriaLogin}>
                    <BotaoBandeira fornecedor="Otima" />
                    <BotaoBandeira fornecedor="Zap2go" />
                    <BotaoBandeira fornecedor="Robbu" />
                </div>
            </div>

        </div>
    )
}

export default Logins;
