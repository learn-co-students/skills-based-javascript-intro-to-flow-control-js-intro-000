'use strict';

function basicTeenager(age){
  if (age>=13&& age<=19)
  {
    return ('You are a teenager!')
  }
}

function teenager(age){
  if (age >= 13 && age <= 19)
  {
    return ('You are a teenager!')
  }
  else if (age > 19 || age < 13)
  {
    return ("You are not a teenager")
  }
}

function ageChecker(age){
  if (age >= 13 && age <= 19)
  {
    return ('You are a teenager!')
  }
  else if (age > 19)
  {
    return ("You are a grownup")
  }
  else (age <= 12)
  {
    return ("You are a kid")
  }
}

function ternaryTeenager(age){
  if (age >= 13 && age <= 19)
  {
    return ("You are a teenager")
  }
  else (age <13 && age >19)
  {
    return("You are not a teenager")
  }
}

function switchAge(age){
  if (age === 13, 14, 15, 16, 17, 18, 19)
  {
    return ("You are a teenager")
  }
  switch(age){
    case "age <= 12 || age >= 20":
      console.log("You have an age")
  }
}
