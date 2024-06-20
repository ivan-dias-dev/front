import React, { useState, useRef } from "react";
import Styles from "./Logins.module.css";
import Created from "./Created";
import { XCircle } from "@phosphor-icons/react";
import Form from "../Logins/FormularioLogin/Form";

function CardLogin({ fornecedor }) {
    const [loginsCriados, setLoginsCriados] = useState([]);
    const [loginsJaExistentes, setLoginsJaExistentes] = useState([]);
    const [cardOpenClosed, setCardOpenClosed] = useState(false);
    const [animacao, setAnimacao] = useState('none');
    const animationRef = useRef(null);
    const styleAnimation = {
        width: 200,
        display: animacao,
    };
    // console.log("mid", fornecedor)
    return (
        <div className={Styles.centraliza}>
            {
                cardOpenClosed && (
                    <div className={Styles.CardSubmit}>
                        <button onClick={() => setCardOpenClosed(false)} className={Styles.close}>
                            <XCircle size={32} color="#08D1CE" />
                        </button>
                        <Created styleAnimation={styleAnimation} animationRef={animationRef} />
                        <div className={Styles.centraliza}>
                            {loginsJaExistentes.length > 0 && (
                                <div className={Styles.cardStatusLoginExistentes}>
                                    <div className={Styles.logins}>
                                        <h3>Logins Existentes:</h3>
                                        <div>
                                            {loginsJaExistentes.map((login, index) => (
                                                <div key={index}>{login}<br /></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {loginsCriados.length > 0 && (
                                <div className={Styles.centraliza}>
                                    <div className={Styles.cardStatusLogin}>
                                        <div className={Styles.logins}>
                                            <h1>Logins Criados!</h1>
                                            <div>
                                                {loginsCriados.map((login, index) => (
                                                    <div key={index}>{login}<br /></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            <Form
                fornecedor={fornecedor}
                setAnimacao={setAnimacao}
                setCardOpenClosed={setCardOpenClosed}
                setLoginsCriados={setLoginsCriados}
                setLoginsJaExistentes={setLoginsJaExistentes}
            />
        </div>
    );
}

export default CardLogin;
