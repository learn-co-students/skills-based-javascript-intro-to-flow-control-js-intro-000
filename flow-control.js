function basicTeenager(age) {
        if (age >= 13 && age <= 19) {
        return"You are a teenager!"
      }
   }

function teenager(age) {
  if (age >=13 && <=19) {
    return "You are a teenager!"
  }
}

  function ageChecker(age) {
    if (age >= 13 && age <=19) {
      return "You are a teenager!"
    } else if (age<=12) {
      return "You are a kid"
    } else {
      return "You are a grownup"
    }
  }


       function ternaryTeenager(age)  {
          conditionToTest (age >=13 && age <=19); valueToBeReturnedIfTrue ("You are a teenager");
          valueToBeReturnedIfFalse ("You are not a teenager");
       }

function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager"
    case 14:
       return "You are a teenager"
    case 15:
       return "You are a teenager"
    case 16:
       return "You are a teenager"
    case 17:
       return "You are a teenager"
    case 18:
       return "You are a teenager"
    case 19:
       return "You are a teenager"
    default:
    console.log ("You have an age")
    }
}
