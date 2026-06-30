import { useEffect, useState } from "react";

import vaultboy from "../../assests/vaultboy.gif";

import bootVideo from "../../videos/loading-pipboy.mp4";

import pipboyLogo from "../../images/pipboy/pipboy-logo.png";

import pipboy from "../../images/pipboy/pipboy.png";

import "./home.css";

function Home() {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [pescoco, setPescoco] = useState("");
  const [fcRepouso, setFcRepouso] = useState("");
  const [sexo, setSexo] = useState("");
  const [atividade, setAtividade] = useState("");
  const [dots, setDots] = useState(".");


  const [showSexo, setShowSexo] = useState(false);
  const [showAtividade, setShowAtividade] = useState(false);

  const [screen, setScreen] = useState("static");
  const [videoStarted, setVideoStarted] = useState(false);

  const [showBootAnimation, setShowBootAnimation] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const [showPipboy, setShowPipboy] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const [docking, setDocking] = useState(false);
  const [menuAtual, setMenuAtual] = useState("EST");
  const [submenuOffset, setSubmenuOffset] = useState(0);


  function iniciarSistema() {
    /*
        if (
          !nome ||
          !sexo ||
          !nascimento ||
          !atividade ||
          !altura ||
          !peso ||
          !cintura ||
          !quadril ||
          !pescoco ||
          !fcRepouso
        ) {
    
          alert("Preencha todos os campos.");
    
          return;
        }
    */

    setDocking(true);

    setTimeout(() => {

      setScreen("boot");

      setShowLogo(true);

    }, 3000);

    setTimeout(() => {
      setShowPipboy(true);
    }, 3000);

    setTimeout(() => {
      setShowVideo(true);
    }, 6000);

    setTimeout(() => {
      setScreen("menu");
    }, 21000);
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      setScreen("warning");
    }, 3000);

    return () => clearTimeout(timer);

  }, []);
  useEffect(() => {

    if (
      screen !== "static" &&
      screen !== "access"
    ) return;

    const dotsInterval = setInterval(() => {

      setDots((prev) => {

        if (prev === ".") return "..";
        if (prev === "..") return "...";

        return ".";

      });

    }, 500);

    return () => clearInterval(dotsInterval);

  }, [screen]);

  return (

    <main className="home">

      {screen === "static" && (
        <div className="screen">

          <h1>SEM SINAL{dots}</h1>

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
        <div
          className={
            docking
              ? "screen screen-docking"
              : "screen"
          }
        >

          <h2>REGISTRO BIOMÉTRICO</h2>

          <div className="form-layout">

            <div className="form-scroll">

              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />


              <label>Sexo</label>

              <div className="select-wrapper">

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

              </div>


              <label>Data de Nascimento</label>
              <input
                type="text"
                placeholder="Dia/Mês/Ano"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />

              <label>Atividade Física</label>
              <div className="select-wrapper">
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

              </div>

              <label>Altura (cm)</label>

              <input
                type="number"
                placeholder="Meça sem sapatos e encostado em uma parede"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />

              <label>Peso (kg)</label>
              <input
                type="number"
                placeholder="Utilize uma balança em superfície plana."
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />

              <label>Cintura (cm)</label>

              <input
                type="number"
                placeholder="Meça na area mais fina da cintura perto do umbigo"
                value={cintura}
                onChange={(e) => setCintura(e.target.value)}
              />

              <label>Quadril (cm)</label>

              <input
                type="number"
                placeholder="Meça a região mais larga dos glúteos"
                value={quadril}
                onChange={(e) => setQuadril(e.target.value)}
              />

              <label>Pescoço (cm)</label>
              <input
                type="number"
                placeholder="Meça logo abaixo do pomo de adão"
                value={pescoco}
                onChange={(e) => setPescoco(e.target.value)}
              />

              <label>FC em Repouso</label>
              <input
                type="number"
                placeholder="Conte os batimentos durante 1 minuto."
                value={fcRepouso}
                onChange={(e) => setFcRepouso(e.target.value)}
              />



              <button
                className="start-button"
                onClick={iniciarSistema}
              >
                INICIAR
              </button>

            </div>
            <div className="vaultboy-area">

              <img
                src={vaultboy}
                alt="Vault Boy"
                className="vaultboy-gif"
              />

            </div>

          </div>

        </div>
      )
      }

      {(screen === "boot" || screen === "menu") && (

        <div className="pipboy-container">

          {showPipboy && (

            <img
              src={pipboy}
              alt="Pip-Boy"
              className="pipboy-reveal"
            />

          )}

          {showPipboy && (

            <div className="screen">

              {showLogo && !showVideo && (

                <img
                  src={pipboyLogo}
                  alt="Logo Pip-Boy"
                  className="boot-logo"
                />

              )}

              {screen === "boot" && showVideo && (

                <video
                  className="boot-video"
                  autoPlay
                  muted
                  playsInline
                >
                  <source
                    src={bootVideo}
                    type="video/mp4"
                  />
                </video>

              )}
              {screen === "menu" && (

                <div className="pipboy-menu">

                  <div className="menu-top">


                    <div className="menu-square"></div>

                    <div
                      className="menu-item"
                      onClick={() => {
                        setMenuAtual("EST");
                        setSubmenuOffset(0);
                      }}
                    >
                      EST
                    </div>

                    <div className="menu-item"
                      onClick={() => {
                        setMenuAtual("CAL");
                        setSubmenuOffset(0);
                      }}
                    >
                      CAL
                    </div>

                    <div className="menu-item"
                      onClick={() => {
                        setMenuAtual("DADOS");
                        setSubmenuOffset(0);
                      }}
                    >
                      DADOS
                    </div>

                    <div className="menu-item"
                      onClick={() => {
                        setMenuAtual("MAPA");
                        setSubmenuOffset(0);
                      }}
                    >
                      MAPA
                    </div>

                    <div className="menu-item"
                      onClick={() => {
                        setMenuAtual("RADIO");
                        setSubmenuOffset(0);
                      }}
                    >
                      RÁDIO
                    </div>

                    <div className="menu-square"></div>

                  </div>
                  <div className="submenu-wrapper">

                    {menuAtual === "CAL" && (

                      <button
                        className="submenu-arrow"
                        onClick={() =>
                          setSubmenuOffset(submenuOffset + 120)
                        }
                      >
                        ◄
                      </button>

                    )}

                    <div className="submenu-window">

                      <div
                        className="menu-submenu"
                        style={{
                          transform: `translateX(${submenuOffset}px)`
                        }}
                      >

                        {menuAtual === "EST" && (
                          <div>STATUS</div>
                        )}

                        {menuAtual === "CAL" && (
                          <>
                            <div>IMC</div>
                            <div>RCQ</div>
                            <div>RCE</div>
                            <div>%GC</div>
                            <div>MMC</div>
                            <div>PIT</div>
                            <div>IC</div>
                            <div>TMB</div>
                            <div>GETD</div>
                            <div>FCM</div>
                            <div>ZTC</div>
                          </>
                        )}

                        {menuAtual === "DADOS" && (
                          <div>REGISTRO</div>
                        )}

                        {menuAtual === "MAPA" && (
                          <div>LOCALIZAÇÃO</div>
                        )}

                        {menuAtual === "RADIO" && (
                          <>
                            <div>MÚSICA 1</div>
                            <div>MÚSICA 2</div>
                            <div>MÚSICA 3</div>
                          </>
                        )}

                      </div>

                    </div>

                    {menuAtual === "CAL" && (

                      <button
                        className="submenu-arrow"
                        onClick={() =>
                          setSubmenuOffset(submenuOffset - 120)
                        }
                      >
                        ►
                      </button>

                    )}

                  </div>

                  <div className="vaultboy-main">

                    VAULT BOY

                  </div>

                  <div className="vaultboy-boxes">

                    <div></div>
                    <div></div>
                    <div></div>

                    <div></div>
                    <div></div>
                    <div></div>

                  </div>

                  <div className="status-bar">

                    <div>PI 100/90</div>

                    <div>NIVEL 36</div>

                    <div>PA ---</div>

                  </div>

                </div>

              )}

            </div>

          )}

        </div>

      )}

    </main >

  );
}

export default Home;