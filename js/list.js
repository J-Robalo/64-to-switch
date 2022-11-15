const button = document.getElementsByClassName("botao-coluna");

button.addEventListener("click", function () {
  const colunaGeral = document.querySelector(".coluna-geral");

  colunaGeral.classList.toggle("active");

  if (colunaGeral.classList.contains("active")) {
    return (button.textContent = "Return");
  }

  button.textContent = "Full lists";
});
