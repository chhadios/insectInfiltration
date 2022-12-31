/**
 * Splits an array into chunks of the given size
 *
 * @param {Array} array
 * @param {number} size
 * @return {Array}
 *
 * @example
 *
 * const pizzaBox = ['🍕', '🍕', '🍕', '🍕', '🍕', '🍕']
 *
 * const portions = chunkArray(pizzaBox, 2)
 *
 * console.log(portions)
 * //=> [['🍕', '🍕'], ['🍕', '🍕'], ['🍕', '🍕']]
 */
function chunkArray (array, size) {
  return array.reduce((acc, cur, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
  }, [])
}

/**
 * Transform a position string into a position object
 *
 * @param {string} str
 * @return {Object}
 *
 * @example
 *
 * const posString = '1 2 N'
 *
 * const posObject = parsePositionStringIntoObject(posString)
 *
 * console.log(posObject)
 * //=> { x: 1, y: 2, d: 'N' }
 */
function parsePositionStringIntoObject (str) {
  const props = str.split(' ')
  const position = {
    x: Number(props[0]),
    y: Number(props[1]),
    d: props[2]
  }

  return position
}

module.exports = {
  chunkArray: chunkArray,
  parsePositionStringIntoObject: parsePositionStringIntoObject
}
