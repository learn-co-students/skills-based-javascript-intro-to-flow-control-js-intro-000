function basicTeenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!"
  } else {
    return undefined
  }
}

function teenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (12 >= age) {
    return "You are a kid"
  } else if (age >= 20) {
    return 'You are a grownup'
  } else {
    return 'You are a teenager!'
  }
}

function ternaryTeenager(age) {
  return 13 <= age && age <=19 ? 'You are a teenager' :  'You are not a teenager'
}

// there's no way this is right 
function switchAge(age) {
  switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    return "You are a teenager"
    break; 
  default:  
    return "You have an age"
      // code to be executed if case n and case m false
  }
}
