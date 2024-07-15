import React, { useState, useRef, useEffect } from "react";
import Styles from "../Logins.module.css";
import Lottie from "lottie-react";
import Loading from "../../animações/Loading.json";

function Form({ setCardOpenClosed, setLoginsCriados, setLoginsJaExistentes, fornecedor }) {
    const [centroCusto, setCentroCusto] = useState('');
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [animacao, setAnimacao] = useState('block');
    const [isLoading, setIsLoading] = useState(false);
    const animationRef = useRef(null);
    const timeoutRef = useRef(null);
    const animation2Ref = useRef(null);
    
    if (animation2Ref.current) {
        setAnimacao(true);
        animation2Ref.current.goToAndPlay(0, true);
        animation2Ref.current = setTimeout(() => {
            if (animation2Ref.current) {
                animation2Ref.current.stop();
                setAnimacao(false);
            }
        }, 3000);
    }

    const styleAnimation = {
        width: 200,
        display: animacao
    };

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

    const enviaForm = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(fornecedor);

        const nomes = separarNome(nome);
        const cpfs = separarCpfs(CPF, centroCusto);
        const formData = { centroCusto, nomes, cpfs };
        let URL;

        if (fornecedor === "Zap2go") {
            URL = 'http://localhost:3005/enviaLoginsZap';
        } else if (fornecedor === "Robbu") {
            URL = 'http://localhost:3005/enviaLoginsRobbu';
        } else if (fornecedor === "Otima") {
            URL = 'http://localhost:3005/enviaLoginsOtima';
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setCardOpenClosed(true);
                console.log("animationRef.current", animationRef.current);

                if (animationRef.current) {
                    setAnimacao(true);
                    animationRef.current.goToAndPlay(0, true);
                    timeoutRef.current = setTimeout(() => {
                        if (animationRef.current) {
                            animationRef.current.stop();
                            setAnimacao(false);
                        }
                    }, 3000);
                }

                setLoginsCriados(data.loginsCriados);
                setLoginsJaExistentes(data.loginsExistente);
            } else {
                const errorData = await response.json();
                console.error('Erro ao enviar logins:', errorData);
                alert('Erro ao criar o post: ' + errorData.message);
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao criar o post: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <form onSubmit={enviaForm}>
            <div className={Styles.cardLogin}>
                {fornecedor !== "Robbu" && (
                    <div className="d-flex justify-content-center">
                        <div className={Styles.InputLogin}>
                            <div className={Styles.centroCusto}>
                                {fornecedor === "Otima" ? "Centro de Custo" : "Código do grupo"}
                            </div>
                            <textarea
                                required
                                placeholder={fornecedor === "Otima" ? "Centro de Custo" : "Código do grupo"}
                                value={centroCusto}
                                onChange={(e) => setCentroCusto(e.target.value)}
                            />
                        </div>
                    </div>
                )}
                <div className={Styles.PaiBlocotNomeCPF}>
                    <div className={Styles.BlocotNomeCPF}>
                        <div className={Styles.InputLogin2}>
                            <div className={Styles.nome}>{fornecedor !== "Robbu" ? "Nome" : "Referência"}</div>
                            <textarea
                                placeholder={fornecedor !== "Robbu" ? "Nome" : "Referência"}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className={Styles.InputLogin2}>
                            <div className={Styles.cpf}>CPF</div>
                            <textarea
                                placeholder="CPF"
                                value={CPF}
                                onChange={(e) => setCPF(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className={`${Styles.botaoTitulo} ${Styles.criar}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>

                </div>
                <div>
                    <Lottie
                        animationData={Loading}
                        style={styleAnimation}
                        lottieRef={animationRef}
                        autoplay={false}
                        loop={false}
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;
