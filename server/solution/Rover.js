const cardinalPoints = ['N', 'E', 'S', 'W']

/** Class representing the rover. */
class Rover {
  /**
   * Create a rover with initial position.
   * @param {Object} initialPosition
   */
  constructor (initialPosition) {
    this.position = initialPosition
  }

  /**
   * Move the rover
   * @return {string} command
   */
  move (command) {
    let index

    switch (command) {
      case 'L':
        index =
          this.position.d === 'N'
            ? 3
            : cardinalPoints.indexOf(this.position.d) - 1
        this.position.d = cardinalPoints[index]
        break

      case 'R':
        index =
          this.position.d === 'W'
            ? 0
            : cardinalPoints.indexOf(this.position.d) + 1
        this.position.d = cardinalPoints[index]
        break

      case 'M':
        switch (this.position.d) {
          case 'N':
            this.position.y = this.position.y + 1
            break
          case 'E':
            this.position.x = this.position.x + 1
            break
          case 'S':
            this.position.y = this.position.y - 1
            break
          case 'W':
            this.position.x = this.position.x - 1
            break

          default:
            throw new Error(
              'There must be something wrong with rover orientation'
            )
        }
        break

      default:
        throw new Error('This command is not supported')
    }
  }

  /**
   * Get rover's position as a formatted string.
   * @return {string} command
   */
  getPosition () {
    return this.position.toString()
  }
}

module.exports = {
  Rover: Rover
}
