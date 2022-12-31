'use strict'

const tap = require('tap')
const { simulateMission } = require('./simulator')

const { test } = tap

test('Should return the final position of the simulator', t => {
  const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

  const wanted = `1 3 N
5 1 E`

  const found = simulateMission(input)
  t.strictSame(found, wanted)
  t.end()
})
