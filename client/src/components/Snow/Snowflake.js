class Snowflake {
  constructor({ xPos, yPos }) {
    this.height = Math.floor(Math.random() * 3);
    this.width = Math.floor(Math.random() * 3);
    this.xPos = xPos;
    this.yPos = yPos;
    this.area = this.height * this.width;
    this.color = "rgb(255, 255, 255)"
  }
  fall(groundLevel) {
    this.yPos += this.area / 2
    if (this.yPos >= groundLevel) this.yPos = -Math.random() * 50
  }

}

export default Snowflake