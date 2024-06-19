import React, { useState, useRef } from "react";
import BotaoBandeira from "../../BotaoBandeira";
import Styles from "../Logins.module.css";

function Form(setCardOpenClosed, setLoginsCriados, setLoginsJaExistentes) {
    const [centroCusto, setCentroCusto] = useState('');
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
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
    )
}

export default Form