function basicTeenager(age) {
  if(age>12 && age<20) {
    return "You are a teenager!"
    }
}

function teenager(age) {
  if(age>12 && age<20) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if(age>12 && age<20) {
    return "You are a teenager!"
  } else if (age<13) {
    return "You are a kid"
  } else if (age > 19) {
    return "You are a grownup"
  } else {
    return "You are not a teenager"
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ?  "You are a teenager" :  "You are not a teenager"
}

function switchAge(age) {
  switch(true) {
    case age>12 && age<20:
    return "You are a teenager";
    default:
    return "You have an age"
  }
}
