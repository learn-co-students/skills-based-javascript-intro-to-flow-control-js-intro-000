function basicTeenager(age) {
if (age === 13 && age <= 19) {
  return ("You are a teenager!")
} else {
  return undefined
}
return age
}

function teenager(age) {
if (age === 13 && age <= 19) {
  return ("You are a teenager!")
} else {
  return ("You are not a teenager")
}
return age
}

function ageChecker(age) {
if (age <= 12) {
  return ("You are a kid")
} else if (age === 13 && age <= 19) {
  return ("You are a teenager!")
} else {
  return ("You are a grownup")
}
return age
}

function ternaryTeenager(age) {
return (age >= 13 && age <= 19) ? ("You are a teenager") :
("You are not a teenager")
}

function switchAge(age) {
  switch(age) {
    case (15) :
      return "You are a teenager"
      break;
    default:
      return "You have an age"
  }
  return age
}
