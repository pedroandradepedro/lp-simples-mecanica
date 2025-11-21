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
