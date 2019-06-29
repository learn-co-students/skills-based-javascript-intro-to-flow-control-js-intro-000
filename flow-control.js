function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return ('You are a teenager!')
  }
  if (age <13 && age > 19) {
    return ('You are not a teenger.')
  }

}

function teenager(age) {
  if (age >= 13 && age <= 19) {
<<<<<<< HEAD
    return ('You are a teenager!')
  }  else  {
    return ("You are not a teenager")
=======
  }
  else if (age < 13 && age > 19) {
    return ("You are not a teenager")
  } else {
    return ('You are a teenager!')
>>>>>>> 4a12063df1152b8c123d4168a7979998a151699e
  }

}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return ('You are a teenager!')
  } else if (age < 13) {
    return ('You are a kid')
  } else if (age > 19) {
    return ('You are a grownup')
  }

}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19)? ('You are a teenager') :
  ('You are not a teenager')

}


function switchAge(age) {
  switch (age) {
    case (13):
    case (14):
    case (15):
    case (16):
    case (17):
    case (18):
    case (19):
      return "You are a teenager"
    default:
      return "You have an age"

  }

}
