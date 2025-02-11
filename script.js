document.addEventListener("DOMContentLoaded", () => {
  // Data inicial fixa
  const dataInicial = new Date("2025-01-11T22:30:47");

  // Forçar música a tocar mesmo em navegadores que bloqueiam autoplay
  const audio = document.getElementById("musica");
  audio.play().catch(() => {
    const playButton = document.createElement("button");
    playButton.textContent = "Clique para ouvir a música";
    playButton.style.position = "absolute";
    playButton.style.top = "20px";
    playButton.style.left = "20px";
    playButton.style.zIndex = "1000";
    playButton.addEventListener("click", () => {
      audio.play();
      playButton.remove();
    });
    document.body.appendChild(playButton);
  });

  // Atualiza o contador
  function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicial; // Diferença em milissegundos
    if (diferenca >= 0) {
      const segundosTotais = Math.floor(diferenca / 1000);
      const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
      const meses = Math.floor((segundosTotais % (365.25 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
      const dias = Math.floor((segundosTotais % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
      const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
      const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
      const segundos = Math.floor(segundosTotais % 60);

      // Atualiza os valores na página
      document.getElementById("anos").textContent = anos;
      document.getElementById("meses").textContent = meses;
      document.getElementById("dias").textContent = dias;
      document.getElementById("horas").textContent = horas;
      document.getElementById("minutos").textContent = minutos;
      document.getElementById("segundos").textContent = segundos;
    }
  }

  // Inicia o contador e atualiza a cada segundo
  setInterval(atualizarContador, 1000);

  // Função para controlar o carrossel
  function setupCarousel(carouselId, indicatorsId) {
    const carousel = document.getElementById(carouselId);
    const indicators = document.getElementById(indicatorsId).querySelectorAll(".indicator");
    let currentIndex = 0;

    function updateCarousel(index) {
      const translateX = -index * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % indicators.length;
      updateCarousel(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
      updateCarousel(currentIndex);
    }

    // Adiciona eventos aos indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel(currentIndex);
      });
    });

    // Troca automática de slides a cada 5 segundos
    setInterval(nextSlide, 5000);

    // Inicializa o carrossel
    updateCarousel(currentIndex);
  }

  // Configura os carrosséis
  setupCarousel("carousel1", "indicators1");
  setupCarousel("carousel2", "indicators2");
});