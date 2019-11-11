const expect = require('chai').expect
const e2rpg = require('../lib')
const wordList = require('../lib/wordList')

describe('Main functionality', () => {
  it('displays a friendly welcome message', () => {
    const message = e2rpg.message

    expect(message).to.equal('Hello E2RPG. :-)')
  })
})

describe('Word list', () => {
  it('contains the contains over 1500 words', () => {
    expect(wordList.length).to.be.greaterThan(1500)
  })
})
