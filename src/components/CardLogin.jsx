import Styles from "./Logins.module.css"
import { useState } from "react";
import BotaoBandeira from "./BotaoBandeira";
function CardLogin() {
    const [centroCusto, setCentroCusto] = useState('');
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [loginsCriados, setLoginsCriados] = useState('');
    const [loginsJaExistentes, setLoginsJaExistentes] = useState('');
    function separarNome(inputNome) {
        var nomeArray = inputNome.split("\n").map(function (nome) {
            console.log("serparaNome")
            return nome.trim();
        });
        console.log(nomeArray);
        return nomeArray;
    }
    function separarCpfs(inputCpfs, carteiras) {
        var cpfsArray = [];
        if (carteiras == "Nubank CI 91-360") {
            cpfsArray = inputCpfs.split("\n").map(function (cpf) {
                return cpf.replace(/[.-]/g, "").trim();
            });
        } else {
            cpfsArray = inputCpfs
                .split("\n")
                .map(function (cpf) {
                    cpf = cpf.replace(/[.-]/g, "").trim();
                    while (cpf.length < 11) {
                        cpf = '0' + cpf;
                    }
                    return cpf;
                })
                .filter(function (cpf) {
                    return /^\d{11}$/.test(cpf); // Verifica se o CPF tem 11 dígitos
                });
        }
        return cpfsArray;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let nomes = await separarNome(nome)
        let cpfs = await separarCpfs(CPF, centroCusto)
        let formData = {
            centroCusto, nomes, cpfs
        };
        console.log("post", nomes, cpfs)
        try {
            const response = await fetch('http://localhost:3005/enviaLogins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Response data:", data);
                alert('Login enviados com sucesso!');
                setLoginsCriados(data.loginsCriados)
                setLoginsJaExistentes(data.loginsExistente)
                console.log("main", data)
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
        <>
            <div className={Styles.centraliza}>
                <form action="submit" onSubmit={handleSubmit}>
                    <div className={Styles.cardLogin}>
                        <div className="d-flex justify-content-center">
                            <div className={Styles.InputLogin}>
                                <div className={Styles.centroCusto}>Centro de custo</div>
                                <textarea
                                    type="text"
                                    required
                                    value={centroCusto}
                                    onChange={(e) => setCentroCusto(e.target.value)} />
                            </div>
                        </div>
                        <div className={Styles.PaiBlocotNomeCPF}>
                            <div className={Styles.BlocotNomeCPF}>
                                <div className={Styles.InputLogin2}>
                                    <div className={Styles.nome} >Nome</div>
                                    <textarea
                                        type="text"
                                        required
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className={Styles.InputLogin2}>
                                    <div className={Styles.cpf}>CPF</div>
                                    <textarea
                                        type="text"
                                        value={CPF}
                                        onChange={(e) => setCPF(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <BotaoBandeira fornecedor="criar" />
                        </div>
                    </div >
                </form>
            </div>
            {
                loginsJaExistentes.length > 0 ?
                    <div className={Styles.centraliza}>
                        <div className={Styles.cardStatusLoginExistentes}>

                            <div className={Styles.logins}>
                                <h3>Logins Existentes:</h3>
                                <div>
                                    {
                                        loginsJaExistentes.map((login, index) => (
                                            <div key={index}>
                                                {login}
                                                <br />
                                            </div>
                                        ))  
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }
            {
                loginsCriados.length > 0 ? <div className={Styles.centraliza}>
                    <div className={Styles.centraliza}>
                        <div className={Styles.cardStatusLogin}>

                            <div className={Styles.logins}>
                                <h1>logins criados!</h1>
                                <div>
                                    {loginsCriados.map((login) => (
                                        login
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""
            }

        </>
    )
}
export default CardLogin
