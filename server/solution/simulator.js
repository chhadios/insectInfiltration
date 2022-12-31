const { Rover } = require('./Rover')
const { Position } = require('./Position')
const { chunkArray, parsePositionStringIntoObject } = require('./lib')

/**
 * Simulates a Mars Rovers mission.
 *
 * @param {string} input
 * @return {string}
 */
function simulateMission (input) {
  const data = input.split('\n')
  const rest = data.slice(1)
  const chunks = chunkArray(rest, 2)
  const instructions = chunks.map(chunk => ({
    initPos: parsePositionStringIntoObject(chunk[0]),
    commands: chunk[1].split('')
  }))

  return instructions
    .map(el => {
      const { x, y, d } = el.initPos
      const rover = new Rover(new Position(x, y, d))

      el.commands.forEach(command => {
        rover.move(command)
      })
      return rover.getPosition()
    })
    .join('\n')
}

module.exports = {
  Rover: Rover,
  Position: Position,
  simulateMission: simulateMission
}
