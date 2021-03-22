function basicTeenager(age) {
  if(age <= 19 && age > 12)
  {
    return 'You are a teenager!'
  }
}

function teenager(age) {

  if(age <= 19 && age > 12)
  {
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if(age <= 12)
  {
    return 'You are a kid'
  }
  else if (age > 19)
    {
      return 'You are a grownup'
    }
  else
    {
      return 'You are a teenager!'
    }
}

function ternaryTeenager(age) {

return age <= 19 && age > 12 ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
  switch(age) {
  case 19:
    return "You are a teenager"
  case 18:
    return "You are a teenager"
  case 17:
    return "You are a teenager"
  case 16:
    return "You are a teenager"
  case 15:
    return "You are a teenager"
  case 13:
    return "You are a teenager"
  default:
    return "You have an age"
}

console.log("Let us know how old you are feeling tomorrow!")

}
