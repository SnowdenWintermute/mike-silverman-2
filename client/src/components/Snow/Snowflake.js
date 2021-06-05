class Snowflake {
  constructor({ xPos, yPos }) {
    this.height = Math.floor(Math.random() * 3 + 1);
    this.width = Math.floor(Math.random() * 3 + 1);
    this.z = Math.floor(Math.random() * 3 + 1);
    this.xPos = xPos;
    this.yPos = yPos;
    this.area = this.height * this.width;
    this.color = "rgb(255, 255, 255)";
    this.falling = true;
  }
  fall(groundLevel, wind) {
    if (!this.falling) return;
    if (this.yPos >= groundLevel) this.yPos = Math.random() * -30;
    else this.yPos += this.area / 2;
    this.xPos += wind.current.direction;
  }
}

export default Snowflake;
