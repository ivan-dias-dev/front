import Styles from "./Logins.module.css"
function CardLogin() {
    return (
        <>
            <div className={Styles.cardLogin}>
                <div className="d-flex justify-content-center">
                    <div className={Styles.InputLogin}>
                        <div>Centro de custo</div>
                        <input type="text" />
                    </div>
                </div>
                <div className={Styles.PaiBlocotNomeCPF}>
                    <div className={Styles.BlocotNomeCPF}>
                        <div className={Styles.InputLogin2}>
                            <div className={Styles.nome} >Nome</div>
                            <textarea type="text" />
                        </div>
                        <div className={Styles.InputLogin2}>
                            <div className={Styles.cpf}>CPF</div>
                            <textarea type="text" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default CardLogin
