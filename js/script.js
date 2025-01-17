window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", () => {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }

  // Function that handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "a",
      "A",
      "ArrowUp",
      "w",
      "W",
      "ArrowRight",
      "d",
      "D",
      "ArrowDown",
      "s",
      "S"
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
        case "a":
        case "A":
          game.player.directionX = -3;
          break;
        case "ArrowUp":
        case "w":
        case "W":
          game.player.directionY = -3;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          game.player.directionX = 3;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          game.player.directionY = 3;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};
