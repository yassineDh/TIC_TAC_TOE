function gameBoard() {
  let board = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ];

  let squareId;

  let drawBoard = () => {
    Object.seal(board);
    let divContainer = document.getElementById("container");
    for (let i = 0; i < 9; i++) {
      let boardSquare = document.createElement("div");

      boardSquare.style.borderWidth = "1px";
      boardSquare.style.borderStyle = "solid";
      boardSquare.style.borderColor = "black";
      boardSquare.style.borderCollapse = "collapse";
      boardSquare.style.alignContent = "stretch";
      boardSquare.style.textAlign = "center";
      boardSquare.style.lineHeight = 6;
      boardSquare.id = i;
      boardSquare.addEventListener("click", setSquareId.bind(this));

      divContainer.appendChild(boardSquare);
    }
  };
  let setSquareId = (that) => {
    this.squareId = that.target.id;
  };

  let getSquareId = () => this.squareId;

  let fillSquare = (eltId, symbol) => {
    let elt = document.getElementById(eltId);
    elt.innerHTML = symbol;
  };

  let checkRowFull = (eltRow) => eltRow != undefined;

  let endGame = () => {
    let countRow = 0;
    for (let i = 0; i < 3; i++) {
      //check if board is full
      if (board[i].every(checkRowFull)) {
        ++countRow;
      }

      let holder;
      for (let j = 0; j < array.length; j++) {
        if (
          board[j][i] == board[j][i + 3] &&
          board[j][i] == board[j][i + 6] &&
          board[j][i] != undefined
        ) {
          return board[j][i];
        }
        return;
      }


      
    }
  };

  return { getSquareId, fillSquare, drawBoard };
}

function player(name, symbol) {
  let nameplayer = name;

  let idSquare;

  let getBoardSquareId = () => {
    this.idSquare = gb.getSquareId();
  };
  return {
    getBoardSquareId,
  };
}

let game = () => {
  let gb = gameBoard();

  let playerX = player("PlayerX", "X");
  let playerO = player("PlayerO", "O");
};
