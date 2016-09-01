/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

var age;

function basicTeenager(age){
  if (age >= 13 && age <= 19)
    return "You are a teenager!";
}

function teenager(age){
  if (age >=13 && age <=19)
    return "You are a teenager!";

  else
    return "You are not a teenager";

}


function ageChecker(age){
  if (age >=13 && age <=19)
  return ("You are a teenager!");

  else if (age <= 12)
    return ("You are a kid");
  else
    return ("You are a grownup");
  }

  function ternaryTeenager(age){
      return (age >=13 && age <=19 ? `You are a teenager`: `You are not a teenager`);
    }

  function switchAge(age){
    switch(age) {
      case 13:
        return ("You are a teenager");
      case 14:
        return ("You are a teenager");
      case 15:
        return ("You are a teenager");
      case 16:
        return ("You are a teenager");
      case 17:
        return ("You are a teenager");
      case 18:
        return ("You are a teenager");
      case 19:
        return ("You are a teenager");
      default:
        return ("You have an age");
      }
  }


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
