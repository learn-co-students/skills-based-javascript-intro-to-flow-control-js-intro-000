function basicTeenager(age) {
  if (age>=13&&age<=19) {return'You are a teenager!'}
  else{return undefined}
}

function teenager(age) {
  if (age>=13&&age<=19) {return'You are a teenager!'
    // condition is false hence code is not executed
  }else {return 'You are not a teenager'}
}

function ageChecker(age) {
  if (age>=13&&age<=19) {return'You are a teenager!'
    // condition is false hence code is not executed
  }else if (age>19) {return'You are a grownup'
    // condition is false hence code is not executed
    // execute this code iff none of the other conditions are met
  }else {return 'You are a kid'}
}

function ternaryTeenager(age) {
(return age>=13&&age<=19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age)
  {case 13:
      return("You are a teenager");
  case 14:
      return("You are a teenager");
  case 15:
      return("You are a teenager");
  case 16:
      return("You are a teenager");
  case 17:
      return("You are a teenager");
  case 18:
      return("You are a teenager");
  case 19:
      return("You are a teenager");
  default:
     return ("You have an age")}
}
