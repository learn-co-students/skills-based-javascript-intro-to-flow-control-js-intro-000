
'use strict';
describe('Flow Control Basics', function() {
  
  describe('#basicTeenager', function() {
    it('should return "You are a teenager!" if the age is between 13-19', function() {
      expect(basicTeenager(13)).toBe("You are a teenager!");
    });

    it('should return undefined if the age is not between 13-19', function(){
      expect(basicTeenager(12)).toBe(undefined);
    });
    
  });

  describe('#teenager', function() {
    it('should return "You are a teenager!" if the age is between 13-19', function() {
      expect(teenager(13)).toBe("You are a teenager!");
    });
    it('should return "you are not a teenager" if the age is not between 13-19', function(){
      expect(teenager(12)).toBe("You are not a teenager");
      expect(teenager(29)).toBe("You are not a teenager");
    });

  });

  describe('#ageChecker', function() {
    it('should return "You are a teenager!" if the age is between 13-19', function() {
      expect(ageChecker(13)).toBe("You are a teenager!");
    });
    it('should return "You are a kid" if the age is 12 or below', function(){
      expect(ageChecker(12)).toBe("You are a kid");
    });
    it('should return "You are a grownup" if the age is 20 or above', function(){
      expect(ageChecker(29)).toBe("You are a grownup");
    });

  });

  describe('#ternaryTeenager', function() {
    it('should return "You are a teenager" if age is between 13-19', function() {
      expect(ternaryTeenager(15)).toBe("You are a teenager");
    });

    it('should return "You are not a teenager" if age not between 13-19', function() {
      expect(ternaryTeenager(75)).toBe("You are not a teenager");
    });
    
  });

    describe('#switchAge', function() {
    it('should return "You are a teenager" if age is between 13-19', function() {
      expect(switchAge(15)).toBe("You are a teenager");
    });

    it('should return "You are not a teenager" if age not between 13-19', function() {
      expect(switchAge(75)).toBe("You have an age");
      expect(switchAge(7)).toBe("You have an age");
    });
    
  });

 
});