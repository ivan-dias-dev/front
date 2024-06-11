import Styles from "./Logins.module.css"
function CardLogin() {
    return (
        <form action="submit">
            <div className={Styles.cardLogin}>
                <div className="d-flex justify-content-center">
                    <div className={Styles.InputLogin}>
                        <div className={Styles.centroCusto}>Centro de custo</div>
                        <input type="text" required />
                    </div>
                </div>
                <div className={Styles.PaiBlocotNomeCPF}>
                    <div className={Styles.BlocotNomeCPF}>
                        <div className={Styles.InputLogin2}>
                            <div className={Styles.nome} >Nome</div>
                            <textarea type="text" required />
                        </div>
                        <div className={Styles.InputLogin2}>
                            <div className={Styles.cpf}>CPF</div>
                            <textarea type="text" required />
                        </div>
                    </div>
                </div>
            </div >
        </form>
    )
}
export default CardLogin
