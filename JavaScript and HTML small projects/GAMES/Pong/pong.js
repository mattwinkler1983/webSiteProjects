let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

window.onload = function() {
    board = document.querySelector("#board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
}
    
