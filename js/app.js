function pesquisar() {
  const resultadosDiv = document.getElementById("resultados-pesquisa");

  let section = document.getElementById("resultados-pesquisa");
  let sugestaoDiv = document.getElementById("campo-sugestao");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  let resultados = "";
  let raca = "";
  let descricao = "";
  let utilizacao = "";
  let tags = "";

  campoPesquisa = campoPesquisa.toLowerCase();

  if (!campoPesquisa) {
    resultadosDiv.style.opacity = 0;
    resultadosDiv.style.display = "flex";
    setTimeout(() => {
      resultadosDiv.style.opacity = 1;
    }, 10);
    section.innerHTML = `<p>Campo de pesquisa vazio</>`;
    return;
  }

  for (let dado of dados) {
    raca = dado.raca.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    utilizacao = dado.utilizacao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (raca.includes(campoPesquisa) || utilizacao.includes(campoPesquisa) || tags.includes(campoPesquisa))
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
    resultados = `
        <div>
          <h2>Não foi encontrado raça nenhuma com sua pesquisa.</h2>
          <h3>Você pode adicionar sugestões de raças no campo abaixo</h3>
        </div>
        <div>
          <input id="campo-sugerido" type="text" placeholder="Digite a raça de um cachorro sugerida" />
          <button id="botao-sugerido" onclick="sugerir()">Sugerir</button>
          <div id="campo-sugestao">
          </div>
        </div>`;
  }

  resultadosDiv.style.opacity = 0;
  resultadosDiv.style.display = "flex";
  setTimeout(() => {
    resultadosDiv.style.opacity = 1;
  }, 10);

  section.innerHTML = resultados;
}

const campoBusca = document.getElementById("campo-pesquisa");

campoBusca.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});

function sugerir() {
  let campoSugerido = document.getElementById("campo-sugerido").value;

  campoSugeridoLowerCase = campoSugerido.toLowerCase();

  if (!campoSugeridoLowerCase) {
    console.log(campoSugeridoLowerCase);
    sugestaoDiv.innerHTML = "<p>Campo sugerido vazio</>";
    return;
  } else {
    sugestoes.push(campoSugeridoLowerCase);
  }
  console.log(sugestoes);
}

const campoSugestao = document.getElementById("campo-sugerido");

campoBusca.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sugerir();
  }
});
