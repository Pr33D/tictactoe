const Gameboard = (() => {
  let gameBoard = ["x", "", "o", "x", "", "", "o", "", ""];
  gameBoard.forEach((e, index) => {
    const fieldButton = document.createElement("div");
    fieldButton.classList.add("fieldButton");
    fieldButton.setAttribute("id", index);
    fieldButton.innerHTML = e;
    document.querySelector("#field").appendChild(fieldButton);
  });
})();

const playGame = (() => {})();

const Player = (name, xo) => {
  return { name, xo };
};
