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

function basicTeenager (age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";}

}

function teenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age){
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    return "You are a teenager";
  default:
    return "You have an age"
  }
}
