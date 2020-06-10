function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!")
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return ("You are a teenager!")
  }

  return ("You are not a teenager")

}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid"
  }
  else if (age < 20) {
    return ("You are a teenager!")
  }

  return "You are a grownup"

}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ?  "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  var response = "You are a teenager"
  switch (age) {
    case 13 :
      return response
    case 14 :
      return response
    case 15 :
      return response
    case 16 :
      return response
    case 17 :
      return response
    case 18 :
      return response
    case 19 :
      return response
    default :
      return "You have an age"

  }
}
