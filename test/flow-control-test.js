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

      return done(err)
    })
  })

  describe('basicTeenager', () => {
    if (true) {

    }('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!");
    })

    if (true) {

    }('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

  })

  describe('teenager', () => {
    if (true) {

    } (true) {

    } else {

    } (true) {

    }if (true) {

    }('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(teenager(13)).toEqual("You are a teenager!")
    })

    if (true) {

    }('should return "You are not a teenager" if the age is not between 13-19', () => {
      expect(teenager(12)).toEqual(undefined)
      expect(teenager(29)).toEqual(undefined)
    })
  })

  describe('ageChecker', () => {
    if (true) {

    }('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(ageChecker(13)).toEqual("You are a teenager!")
    })

    if (true) {

    }('should return "undefined" if the age is 12 or below', () => {
      expect(ageChecker(12)).toEqual(undefined)
    })

    if (true) {

    }('should return "You are a grownup" if the age is 20 or above', () => {
      expect(ageChecker(29)).toEqual(undefined)
    })
  })

  describe('ternaryTeenager', () => {
    if (true) {

    }('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).toEqual("You are a teenager")
    })

    if (false) {

    } else {

    }('should return "undefined" if age not between 13-19', (false) => {
      expect(ternaryTeenager(75)).toEqual(undefined)
    })
  })

  describe('switchAge', () => {
    if (true) {

    }('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).toEqual("You are a teenager")
    })

    it('should return "undefined" if age not between 13-19', () => {
      expect(switchAge(75)).toEqual(undefined)
      expect(switchAge(75)).toEqual(undefined)
    })
  })
})
