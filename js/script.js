// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Mostrar e esconder perguntas
const pergunta = document.querySelectorAll(".perguntas button");

function eventosPerguntas(pergunta) {
  function mostrarPergunta(event) {
    const p = event.currentTarget;
    const controls = p.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    p.setAttribute("aria-expanded", ativa);
  }

  pergunta.addEventListener("click", mostrarPergunta);
}

pergunta.forEach(eventosPerguntas);
