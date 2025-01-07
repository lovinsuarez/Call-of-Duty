// Função para o clique no botão "Sim"
function escolherSim() {
    // Esconde os botões "Sim" e "Não" imediatamente
    document.querySelector('.botoes').style.display = 'none';  // Esconde os botões
    
    // Mostra o cronômetro
    document.querySelector('#contador').style.display = 'block';  // Mostra o contador
  
    // Salva o momento de início no localStorage, se ainda não foi salvo
    if (!localStorage.getItem('inicio')) {
      const inicio = new Date().toISOString();  // Salva a data atual em formato ISO
      localStorage.setItem('inicio', inicio);
    }
  
    // Inicia a contagem
    iniciarContagem();
  }
  
  // Função para iniciar a contagem
  function iniciarContagem() {
    // Recupera o momento de início do localStorage
    const inicio = new Date(localStorage.getItem('inicio'));
    
    // Inicia o cronômetro
    setInterval(() => {
      const agora = new Date();
      const diferenca = agora - inicio;
  
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);
  
      // Atualiza o texto do cronômetro
      document.getElementById('tempo').textContent = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
    }, 1000); // Atualiza a cada 1000 milissegundos (1 segundo)
  }
  
  // Função para mover o botão "Não"
  function moverBotao() {
    const botaoNao = document.getElementById('nao');
    const maxLeft = window.innerWidth - botaoNao.offsetWidth;
    const maxTop = window.innerHeight - botaoNao.offsetHeight;
    
    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;
  
    botaoNao.style.left = `${newLeft}px`;
    botaoNao.style.top = `${newTop}px`;
  }
  
  // Configurar volume da música
  window.onload = function() {
    var musica = document.getElementById('musica');
    musica.volume = 0.7; // Ajuste o volume para o nível desejado
  
    // Se já houver um momento de início salvo, inicie a contagem
    if (localStorage.getItem('inicio')) {
      iniciarContagem();
    }
  };
  