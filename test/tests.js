const expect = require('chai').expect
const e2rpg = require('../lib')

describe('Main functionality', () => {
  it('displays a friendly welcome message', () => {
    const message = e2rpg.message

    expect(message).to.equal('Hello E2RPG. :-)')
  })
})
