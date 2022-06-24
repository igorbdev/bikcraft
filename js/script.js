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

// Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function eventosGaleria(img) {
  function trocarImagem(e) {
    const img = e.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  }

  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Plugin de Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
