/** */
let currentPlayer = "O"; 
function place(box) { 
    box.innerText =currentPlayer;
    if(currentPlayer == "O") { 
        currentPlayer = "X";
    }
    else {
        currentPlayer = "0";
    }
}

