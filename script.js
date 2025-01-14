document.addEventListener("DOMContentLoaded", () => {
  // Data inicial fixa
  const dataInicial = new Date("2025-01-11T22:30:47");

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
});
