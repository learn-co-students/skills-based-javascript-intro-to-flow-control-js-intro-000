const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('flow-control', () => {

  before(done => {
    const src = path.resolve(__dirname, '..', 'flow-control.js')

    jsdom.env('<div></div>', [src], (err, window) => {
      if (err) {
        return done(err)
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      })

      return done()
    })
  })

  describe('basicTeenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!");
    })

    it('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

  })

  describe('teenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(teenager(13)).toEqual("You are a teenager!")
    })

    it('should return "You are not a teenager" if the age is not between 13-19', () => {
      expect(teenager(12)).toEqual("You are not a teenager")
      expect(teenager(29)).toEqual("You are not a teenager")
    })
  })

  describe('ageChecker', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(ageChecker(13)).toEqual("You are a teenager!")
    })

    it('should return "You are a kid" if the age is 12 or below', () => {
      expect(ageChecker(12)).toEqual("You are a kid")
    })

    it('should return "You are a grownup" if the age is 20 or above', () => {
      expect(ageChecker(29)).toEqual("You are a grownup")
    })
  })

  describe('ternaryTeenager', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).toEqual("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(ternaryTeenager(75)).toEqual("You are not a teenager")
    })
  })

  describe('switchAge', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).toEqual("You are a teenager")
    })

    it('should return "You have an age" if age not between 13-19', () => {
      expect(switchAge(75)).toEqual("You have an age")
      expect(switchAge(7)).toEqual("You have an age")
    })
  })
})
