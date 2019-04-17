function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
  else if (age<=12) {
    return "You are a kid"
  }
  else if (age>=20) {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
var output = null
age > 12 && age < 20 ? output='You are a teenager' : output='You are not a teenager'
return output
}

function switchAge(age) {
switch (age) {
  case 13:
    return 'You are a teenager'
  case 14:
    return 'You are a teenager'
  case 15:
    return 'You are a teenager'
  case 16:
    return 'You are a teenager'
  case 17:
    return 'You are a teenager'
  case 18:
    return 'You are a teenager'
  case 19:
    return 'You are a teenager'
  default:
    return "You have an age"
}

}
