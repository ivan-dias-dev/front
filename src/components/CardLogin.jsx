import React, { useState, useRef } from "react";
import Styles from "./Logins.module.css";
import BotaoBandeira from "./BotaoBandeira";
import Created from "./Created";
import { XCircle } from "@phosphor-icons/react";

function CardLogin() {
    const [centroCusto, setCentroCusto] = useState('');
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [loginsCriados, setLoginsCriados] = useState([]);
    const [loginsJaExistentes, setLoginsJaExistentes] = useState([]);
    const [cardOpenClosed, setCardOpenClosed] = useState(false);
    const [animacao, setAnimacao] = useState('none');
    const animationRef = useRef(null);
    console.log("animacao", animacao)
    function separarNome(inputNome) {
        return inputNome.split("\n").map(nome => nome.trim());
    }

    function separarCpfs(inputCpfs, carteiras) {
        const cpfsArray = inputCpfs.split("\n").map(cpf => cpf.replace(/[.-]/g, "").trim());

        if (carteiras !== "Nubank CI 91-360") {
            return cpfsArray.map(cpf => cpf.padStart(11, '0')).filter(cpf => /^\d{11}$/.test(cpf));
        }

        return cpfsArray;
    }

    const styleAnimation = {
        width: 200,
        display: animacao,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nomes = separarNome(nome);
        const cpfs = separarCpfs(CPF, centroCusto);
        const formData = { centroCusto, nomes, cpfs };
        try {
            const response = await fetch('http://localhost:3005/enviaLogins', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                setCardOpenClosed(true);
                if (animationRef.current) {
                    setAnimacao('block');
                    animationRef.current.goToAndPlay(0, true);
                    setTimeout(() => {
                        if (animationRef.current) {
                            animationRef.current.stop();
                            setAnimacao('none');
                        }
                    }, 3000);
                }
                setLoginsCriados(data.loginsCriados);
                setLoginsJaExistentes(data.loginsExistente);
            } else {
                const errorData = await response.json();
                console.error('Erro ao enviar logins:', errorData);
                alert('Erro ao criar o post');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao criar o post');
        }
    };
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
                                            {
                                                loginsJaExistentes.map((login, index) => (
                                                    <div key={index}>{login}<br /></div>
                                                ))
                                            }
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
                                                {
                                                    loginsCriados.map((login, index) => (
                                                        <div key={index}>{login}<br /></div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
            <form onSubmit={handleSubmit}>
                <div className={Styles.cardLogin}>
                    <div className="d-flex justify-content-center">
                        <div className={Styles.InputLogin}>
                            <div className={Styles.centroCusto}>Centro de Custo</div>
                            <textarea
                                required
                                value={centroCusto}
                                onChange={(e) => setCentroCusto(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={Styles.PaiBlocotNomeCPF}>
                        <div className={Styles.BlocotNomeCPF}>
                            <div className={Styles.InputLogin2}>
                                <div className={Styles.nome}>Nome</div>
                                <textarea
                                    required
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className={Styles.InputLogin2}>
                                <div className={Styles.cpf}>CPF</div>
                                <textarea
                                    value={CPF}
                                    onChange={(e) => setCPF(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <BotaoBandeira fornecedor="criar" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CardLogin;
