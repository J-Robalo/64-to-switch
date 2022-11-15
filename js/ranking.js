function getGames(event) {
  event.preventDefault();

  const formInputs = document.querySelectorAll(".input-padrao");
  const games = [];

  for (let i = 0; i < formInputs.length; i++) {
    games.push(formInputs[i].value);
  }

  console.log(games);
}

function addGame() {
  const btn = document.querySelector(".botao-adicionar");
  const formInputs = document.querySelectorAll(".input-padrao");
  if (formInputs.length < 10) {
    const input = document.createElement("input");
    input.classList.add("input-padrao");
    btn.insertAdjacentElement("beforebegin", input);
  }
}
