import Game from "./game.js";
import Paddle from "./paddle.js";

export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        case 27:
          if (game.gamestate === GAMESTATE.PAUSED)
            game.togglePause();
          else if (game.gamestate === GAMESTATE.NEWLEVEL)
            game.start();
          break;
        case 32:
          game.start();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
          break;
      }
    });
  }
}
