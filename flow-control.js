function basicTeenager(age) {
  if (20 > age > 12){
  return ("You are a teenager!")
} else {
  return (undefined)
  }
}

function teenager(age) {
  if (20 > age && age > 12){
  return ("You are a teenager!")
} else {
  return ("You are not a teenager")
  }
}

function ageChecker(age) {
  if (20 > age > 12){
  return ("You are a teenager!")
} else if (age < 13) {
  return("You are a kid")
}else
  return ("You are a grownup")
}
}

function ternaryTeenager(age) {
  return (20 > age && age > 12) ? "You are a teenager!" : "You are not a teenager"
}

function switchAge(age) {
  return (20 > age && age > 12) ? "You are a teenager!" : "You have an age"
}
