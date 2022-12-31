'use strict'

const tap = require('tap')
const { Rover } = require('./Rover')
const { Position } = require('./Position')

const { test } = tap

test('Should return a string coords of an object representation', t => {
  const rover = new Rover(new Position(1, 3, 'N'))
  const wanted = '1 3 N'

  t.same(rover.getPosition(), wanted)
  t.end()
})

test('Given a position and command should return the new rover position', t => {
  const rover = new Rover(new Position(1, 2, 'N'))
  const wanted = { x: 1, y: 2, d: 'W' }
  rover.move('L')

  t.same(rover.position, wanted)
  t.end()
})
