/** Class representing the position. */
class Position {
  /**
   * Create a position.
   * @param {number} x
   * @param {number} y
   * @param {string} d
   */
  constructor (x, y, d) {
    this.x = x
    this.y = y
    this.d = d
  }

  /**
   * Format the position as string.
   * @return {string} command
   */
  toString () {
    return `${this.x} ${this.y} ${this.d}`
  }
}

module.exports = {
  Position: Position
}
