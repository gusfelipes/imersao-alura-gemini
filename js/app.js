function pesquisar() {
  const resultadosDiv = document.getElementById("resultados-pesquisa");

  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  let resultados = "";
  let raca = "";
  let descricao = "";
  let utilidades = "";
  let tags = "";

  campoPesquisa = campoPesquisa.toLowerCase();

  if (!campoPesquisa) {
    console.log(campoPesquisa);
    section.innerHTML = "<p>Campo de pesquisa vazio</>";
    return;
  }

  for (let dado of dados) {
    raca = dado.raca.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    utilidades = dado.utilidades.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (raca.includes(campoPesquisa) || descricao.includes(campoPesquisa) || utilidades.includes(campoPesquisa) || tags.includes(campoPesquisa))
      resultados += `
      <div class="item-resultado">
      <h2>
          <a href="#" target="_blank">${dado.raca}</a>
          </h2>
          <div class="container-item-resultado">
          <img src="${dado.imagem}" alt="Imagem de ${dado.raca}">
          <p class="descricao-meta">${dado.descricao}</p>
          </div>
          <a href="${dado.link}" target="_blank"
          >Mais Informações</a>
      </div>`;
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  resultadosDiv.style.opacity = 0;
  resultadosDiv.style.display = "flex";
  setTimeout(() => {
    resultadosDiv.style.opacity = 1;
  }, 10);

  section.innerHTML = resultados;
}
