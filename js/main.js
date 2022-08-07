const Gameboard = (() => {
let gameBoard = ["x", "", "o", "x", "", "", "o", "", ""];
gameBoard.forEach(e => {
    const fieldButton = document.createElement('div');
    fieldButton.setAttribute("id", e);
    document.querySelector("#field").appendChild(fieldButton);
});
})();

const playGame = (() => {

})();

const Player = (name, xo) => {
    return {name, xo};
};