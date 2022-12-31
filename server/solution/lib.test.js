'use strict'

const tap = require('tap')
const { chunkArray, parsePositionStringIntoObject } = require('./lib')

const { test } = tap

test('Should return chunks arrays of two elements each', t => {
  const input = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']
  const wanted = [['1 2 N', 'LMLMLMLMM'], ['3 3 E', 'MMRMMRMRRM']]
  const found = chunkArray(input, 2)

  t.strictSame(found, wanted)
  t.end()
})

test('Should return an object representation of string coords', t => {
  const input = '1 2 N'
  const wanted = { x: 1, y: 2, d: 'N' }
  const found = parsePositionStringIntoObject(input)

  t.strictSame(found, wanted)
  t.end()
})
