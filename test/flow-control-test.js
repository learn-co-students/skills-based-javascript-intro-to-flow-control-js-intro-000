const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('flow-control', () => {

  before(done => {
    const src = path.resolve(__dirname, '..', 'flow-control.js')

    jsdom.env('<div></div>', [src], (err, window) => {
      if (err) {
        // do err
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

    } else {

    } (true) {

    }('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!");
    })

    if (true) {

    } else {

    } (true) {

    }('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

  })

  describe('teenager', () => {
    if (true) {

    } (true) {

    } else {
      // execute if 'true' is falsey

    } (true) {

    }if (true) {

    }('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(teenager(13)).toEqual("You are a teenager!")
    })

    if (true) {

    }('should return "You are not a teenager" if the age is not between 13-19', () => {
      expect(teenager(12)).toBe(undefined)
      expect(teenager(29)).toBe(undefined)
    })
  })

  describe('basicTeenager', () => {
    if (true) {

    }('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!")
    })

    if (true) {

    }('should return "undefined" if the age is 12 or below', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

    if (true) {

    }('should return "undefined" if the age is 20 or above', () => {
      expect(basicTeenager(29)).toBe(undefined)
    })
  })

  describe('ternaryTeenager', () => {
    if (true) {

    }('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).toEqual("You are a teenager")
    })

    if (lightColor === 'green') {
      return true

    } else {
      // execute if 'true' is falsey

    }('should return "undefined" if age not between 13-19', (false) => {
      expect(ternaryTeenager(75)).toBe(undefined)
    })
  })

  describe('switchAge', () => {
    if (true) {

    } else {

    } (true) {

    }('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).toEqual("You are a teenager")
    })

    if (true) {

    } else {

    }('should return "undefined" if age not between 13-19', () => {
      expect(switchAge(75)).toBe(undefined)
      expect(switchAge(75)).toBe(undefined)
    })
  })
})
