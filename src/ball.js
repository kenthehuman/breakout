import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.size = 20;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 250 };
    this.speed = { x: 5, y: 2 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y -= this.speed.y;

    // collide with walls
    if (this.position.x + this.size > this.gameWidth || this.position.x <= 0) {
      this.speed.x = -this.speed.x;
    }
    if (
      this.position.y + this.size >= this.gameHeight ||
      this.position.y <= 0
    ) {
      this.speed.y = -this.speed.y;
    }
    //lose game at 0 lives
    if (this.position.y + this.size >= this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      // this.speed.x = -this.speed.x;
      this.speed.y = -this.speed.y;
    }
  }
}
