// Função para movimentar o botão "Não"
function moverBotao() {
  const botaoNao = document.getElementById("nao");
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;
  const novaPosicaoX = Math.random() * (larguraTela - botaoNao.offsetWidth);
  const novaPosicaoY = Math.random() * (alturaTela - botaoNao.offsetHeight);
  botaoNao.style.position = "absolute";
  botaoNao.style.left = novaPosicaoX + "px";
  botaoNao.style.top = novaPosicaoY + "px";
}

// Função para configurar o contador e exibi-lo
function escolherSim() {
  const contador = document.getElementById("contador");
  const musica = document.getElementById("musica");

  // Salva a data inicial no localStorage, caso não exista
  if (!localStorage.getItem("dataInicio")) {
    localStorage.setItem("dataInicio", new Date().toISOString());
  }

  // Toca a música
  musica.volume = 0.5; // Volume inicial
  musica.play();

  // Remove a classe "escondido" do contador
  contador.classList.remove("escondido");

  iniciarContagem(); // Inicia a contagem do tempo
}

// Função para iniciar a contagem
function iniciarContagem() {
  const dataInicio = new Date(localStorage.getItem("dataInicio"));

  setInterval(() => {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("anos").textContent = String(anos).padStart(2, "0");
    document.getElementById("meses").textContent = String(meses).padStart(2, "0");
    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
  }, 1000);
}

// Exibe o contador diretamente, caso o usuário já tenha clicado em "Sim" antes
if (localStorage.getItem("dataInicio")) {
  document.getElementById("contador").classList.remove("escondido");
  iniciarContagem();
}
