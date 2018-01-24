function basicTeenager(age) {
  if (age < 20 && age >= 13){
    return "You are a teenager!"
  }
  else {
    return undefined
  }

}

function teenager(age) {
  if (age < 20 && age >= 13){
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {
  if (age < 20 && age >= 13){
    return "You are a teenager!"
  } else if (age <= 12){
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {

  /*
  Define a function ternaryTeenager that accepts age as a parameter.
  The body of the function should use the ternary operator to return "You are a teenager" if age is between 13-19
  and returns "You are not a teenager" if the age is anything else.
  */

  return (age < 20 && age >= 13) ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {

  /*Define a function switchAge that accepts an age as a parameter.
  The case statement should switch on age and return "You are a teenager" if the age is 13, 14, 15, 16, 17, 18, or 19,
   and return "You have an age" as the default.
   */
   switch(age){
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
     return "You have an age"
   }

}
