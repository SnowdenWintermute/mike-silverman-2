class Snowflake {
  constructor({ xPos, yPos }) {
    this.height = Math.floor(Math.random() * 3+1);
    this.width = Math.floor(Math.random() * 3+1);
    this.xPos = xPos;
    this.yPos = yPos;
    this.area = this.height * this.width;
    this.color = "rgb(255, 255, 255)"
    this.falling = true
  }

}

export default Snowflake