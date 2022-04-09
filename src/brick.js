import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    // this.position = { x: 10, y: 10 };
    this.position = position;
    this.width = 60;
    this.height = 30;
    this.game = game;
    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      // this.speed.x = -this.speed.x;
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
      // console.log(this.markedForDeletion);
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
