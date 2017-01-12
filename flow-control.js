function basicTeenager(age) {
if (age >= 13 && age <= 19) {
  return "You are a teenager!"
  }
}


function teenager(age) {
  if (age >=13 && age <= 19) {
    return ("You are a teenager!")
  } else {
      return ("You are not a teenager")
    }
}

function ageChecker(age) {
  if (age >= 13 && age<=19) {
    return ("You are a teenager!")
  }  else if (age <13) {
    return ("You are a kid")
  }  else (age > 19)
    return ("You are a grownup")

}
//for age checker, I thought there {} were needed for the return statement but the Chrome console said it was a syntax error. The example for learn.co has {}. Which is right?

function ternaryTeenager(age) {
  return (age >=13 && age <=19)?
  "You are a teenager" : "You are not a teenager"
}


function switchAge(age) {
  switch (age)  {
    case 13:
    return "You are a teenager";
    case 14:
    return "You are a teenager";
    case 15:
    return "You are a teenager";
    case 16:
    return "You are a teenager";
    case 17:
    return "You are a teenager";
    case 18:
    return "You are a teenager";
    case 19:
    return "You are a teenager";
  default:
    return "You have an age";
  }
}

/*function switchAge(age) {
  switch (age)  {
    case age >=13 && age <=19:
    return "You are a teenager";
  default:
    return "You have an age";
  }
}
 why doesn't age >=13 && age <=19 work for switches?
