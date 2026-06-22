import { useEffect, useState } from "react";

import "./home.css";

function Home() {
  const [sexo, setSexo] = useState("");
  const [atividade, setAtividade] = useState("");

  const [showSexo, setShowSexo] = useState(false);
  const [showAtividade, setShowAtividade] = useState(false);

  const [screen, setScreen] = useState("static");

  useEffect(() => {

    const timer = setTimeout(() => {
      setScreen("warning");
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <main className="home">

      {screen === "static" && (
        <div className="screen">

          <h1>SEM SINAL</h1>

          <div className="connecting">
            <h2>Conectando...</h2>
          </div>

        </div>
      )}

      {screen === "warning" && (
        <div
          className="screen"
          onClick={() => setScreen("form")}
        >

          <h2>ATENÇÃO</h2>

          <div className="warning-scroll">

            <p>
              Bem-vindo ao Sistema de Análise Corporal.
            </p>

            <p>
              Este módulo foi desenvolvido para reunir diversos
              indicadores utilizados em avaliações físicas,
              composição corporal, condicionamento cardiovascular
              e acompanhamento metabólico.
            </p>

            <p>
              Após preencher suas informações, o sistema será
              capaz de calcular automaticamente:
            </p>

            <ul>
              <li>Índice de Massa Corporal (IMC)</li>
              <li>Relação Cintura-Quadril (RCQ)</li>
              <li>Relação Cintura-Estatura (RCE)</li>
              <li>Percentual de Gordura Corporal</li>
              <li>Massa Corporal Magra</li>
              <li>Peso Ideal Teórico</li>
              <li>Índice de Conicidade</li>
              <li>Taxa Metabólica Basal (TMB)</li>
              <li>Gasto Energético Total Diário (GETD)</li>
              <li>Frequência Cardíaca Máxima</li>
              <li>Zonas de Treinamento Cardíaco</li>
            </ul>

            <p>
              Os resultados possuem finalidade educacional
              e não substituem orientação médica.
            </p>

          </div>

          <p className="continue">
            Clique para continuar
          </p>

        </div>
      )}

      {screen === "form" && (
        <div className="screen">

          <h2>REGISTRO BIOMÉTRICO</h2>

          <div className="form-scroll">

            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />


            <label>Sexo</label>

            <button
              className="select-button"
              onClick={() => setShowSexo(!showSexo)}
            >
              {sexo || "Selecionar Sexo"}
            </button>

            {showSexo && (
              <div className="options-box">

                <button
                  className="option"
                  onClick={() => {
                    setSexo("Masculino");
                    setShowSexo(false);
                  }}
                >
                  Masculino
                </button>

                <button
                  className="option"
                  onClick={() => {
                    setSexo("Feminino");
                    setShowSexo(false);
                  }}
                >
                  Feminino
                </button>

              </div>
            )}

            <label>Data de Nascimento</label>
            <input
              type="text"
              placeholder="Dia/Mês/Ano"
            />

            <label>Atividade Física</label>

            <button
              className="select-button"
              onClick={() => setShowAtividade(!showAtividade)}
            >
              {atividade || "Selecionar Atividade"}
            </button>

            {showAtividade && (
              <div className="options-box">

                <button
                  className="option"
                  onClick={() => {
                    setAtividade("Sedentário");
                    setShowAtividade(false);
                  }}
                >
                  Sedentário
                </button>

                <button
                  className="option"
                  onClick={() => {
                    setAtividade("Leve");
                    setShowAtividade(false);
                  }}
                >
                  Leve
                </button>

                <button
                  className="option"
                  onClick={() => {
                    setAtividade("Moderado");
                    setShowAtividade(false);
                  }}
                >
                  Moderado
                </button>

                <button
                  className="option"
                  onClick={() => {
                    setAtividade("Intenso");
                    setShowAtividade(false);
                  }}
                >
                  Intenso
                </button>

                <button
                  className="option"
                  onClick={() => {
                    setAtividade("Atleta");
                    setShowAtividade(false);
                  }}
                >
                  Atleta
                </button>

              </div>
            )}

            <label>Altura (cm)</label>

            <input
              type="number"
              placeholder="Meça sem sapatos e encostado em uma parede"
            />

            <label>Peso (kg)</label>
            <input
              type="number"
              placeholder="Utilize uma balança em superfície plana."
            />

            <label>Cintura (cm)</label>

            <input
              type="number"
              placeholder="Meça na area mais fina da cintura perto do umbigo"
            />

            <label>Quadril (cm)</label>

            <input
              type="number"
              placeholder="Meça a região mais larga dos glúteos"
            />

            <label>Pescoço (cm)</label>
            <input
              type="number"
              placeholder="Meça logo abaixo do pomo de adão"
            />

            <label>FC em Repouso</label>
            <input
              type="number"
              placeholder="Conte os batimentos durante 1 minuto."
            />



            <button className="start-button">
              INICIAR
            </button>

          </div>

        </div>
      )}

    </main>

  );
}

export default Home;