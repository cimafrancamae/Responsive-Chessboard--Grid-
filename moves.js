document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.querySelector(".chessboard");
    const squares = chessboard.querySelectorAll(".square");
    const reset = document.getElementById("reset");

    reset.addEventListener("click", function() {
        location.reload();
    })

    
  squares.forEach((box) => {
    const container = box.querySelector(".piece");

    container.addEventListener("click", (e) => {
        console.log(e.target.id);

        const pieceId = e.target.id;
        if(pieceId.startsWith("b-pawn")) {
            console.log(e)
            document.getElementById(pieceId).classList.add("b-pawn-move");
        }

        if(pieceId.startsWith("w-pawn")) {
            document.getElementById(pieceId).classList.add("w-pawn-move");
        }
      });


  });

    


})