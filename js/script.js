function abrirMenu() {
  let menuMobile = document.querySelector(".mobile-menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".hamburguer").src = "./imgs/Mobile-menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".hamburguer").src = "./imgs/Fechar-menu.svg";
  }
}

// Formatação celular

const form = document.querySelector(".form");
const inputCelular = document.getElementById("celular");
const msgErro = document.getElementById("msgErro");

inputCelular.addEventListener("input", function (e) {
  let valor = e.target.value;

  valor = valor.replace(/\D/g, "");

  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  if (valor.length > 2) {
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  }
  if (valor.length > 10) {
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  }

  e.target.value = valor;

  inputCelular.classList.remove("input-erro");
  msgErro.style.display = "none";
});

form.addEventListener("submit", function (e) {
  const numeroLimpo = inputCelular.value.replace(/\D/g, "");

  if (numeroLimpo.length < 11) {
    e.preventDefault();

    inputCelular.classList.add("input-erro");
    msgErro.style.display = "block";

    inputCelular.focus();
  }
});

// Animação da página
if (window.SimpleAnime) {
  new SimpleAnime();
}
