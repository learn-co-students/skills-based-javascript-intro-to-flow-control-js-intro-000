/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('flow-control', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'flow-control.js'), 'utf-8')
  })

  describe('basicTeenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).to.equal("You are a teenager!");
    })

    it('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).to.be.undefined
    })

  })

  describe('teenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(teenager(13)).to.equal("You are a teenager!")
    })
    it('should return "you are not a teenager" if the age is not between 13-19', () => {
      expect(teenager(12)).to.equal("You are not a teenager")
      expect(teenager(29)).to.equal("You are not a teenager")
    })

  })

  describe('ageChecker', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(ageChecker(13)).to.equal("You are a teenager!")
    })
    it('should return "You are a kid" if the age is 12 or below', () => {
      expect(ageChecker(12)).to.equal("You are a kid")
    })
    it('should return "You are a grownup" if the age is 20 or above', () => {
      expect(ageChecker(29)).to.equal("You are a grownup")
    })

  })

  describe('ternaryTeenager', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).to.equal("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(ternaryTeenager(75)).to.equal("You are not a teenager")
    })

  })

  describe('switchAge', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).to.equal("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(switchAge(75)).to.equal("You have an age")
      expect(switchAge(7)).to.equal("You have an age")
    })

  })
})
