function pesquisar() {
  const resultadosDiv = document.getElementById("resultados");
  let section = document.getElementById("resultados");

  let resultados = "";

  for (let dado of dados) {
    resultados += `
      <div class="item-resultado">
      <h2>
          <a href="#" target="_blank">${dado.raca}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"
          >Mais Informações</a>
      </div>`;
  }

  resultadosDiv.style.opacity = 0;
  resultadosDiv.style.display = "block";
  setTimeout(() => {
    resultadosDiv.style.opacity = 1;
  }, 10);

  section.innerHTML = resultados;
}
