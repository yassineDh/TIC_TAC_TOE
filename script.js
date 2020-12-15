function gameBoard() {
  let board = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ];

  let squareId;

  Object.seal(board);
  let divContainer = document.getElementById("container");
  let drawBoard = () => {
    for (let i = 0; i < 9; i++) {
      let boardSquare = document.createElement("div");
      //   boardSquare.style.height = `20px`;
      //   boardSquare.style.width = `20px`;
      boardSquare.style.borderWidth = "1px";
      boardSquare.style.borderStyle = "solid";
      boardSquare.style.borderColor = "black";
      boardSquare.style.borderCollapse = "collapse";
      boardSquare.style.alignContent = "stretch";
      boardSquare.id = i;
      boardSquare.addEventListener("click", setSquareId.bind(this));

      // boardSquare.addEventListener("click", function(){console.log(this)});
      divContainer.appendChild(boardSquare);
    }
  };
  let setSquareId = (that) => {
    console.log("inside");
    this.squareId = that.target.id;
    console.log(this.squareId);
  };

  let getSquareId = () => this.squareId;

  drawBoard();
  console.log("testttttt");
  return { getSquareId };
}

let gb = gameBoard();

function player(name, symbol) {
  let nameplayer = name;

  let idSquare;

  let getBoardSquareId = () => {
    this.idSquare = gb.getSquareId();
    console.log(this.idSquare);
  };
  return {
    getBoardSquareId,
  };
}

let p = player("gareen", "X");
