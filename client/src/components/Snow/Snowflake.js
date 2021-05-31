class Snowflake {
  constructor({ xPos, yPos }) {
    this.height = Math.floor(Math.random() * 3);
    this.width = Math.floor(Math.random() * 3);
    this.xPos = xPos;
    this.yPos = yPos;
    this.area = this.height * this.width;
  }
}

export default Snowflake