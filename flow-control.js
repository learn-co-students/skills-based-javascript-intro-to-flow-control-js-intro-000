function basicTeenager(age) {
  if (age >= 13 && age <= 19)
    return "You are a teenager!"
    console.log(age)
    basicTeenager(16)
  }

function teenager(age) {
  if (age >= 13 && age <= 19)
    return "You are a teenager!"
  else (age < 13 && age > 19)
    return "You are not a teenager"
  console.log(age)
  teenager(17)
}

function ageChecker(age) {
  if (age >= 13 && age <= 19)
    return "You are a teenager!"
  else if (age <= 12)
    return "You are a kid"
  else (age > 19)
    return "You are a grownup"
  console.log(age)
  ageChecker(18)
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19 ? "You are a teenager" :
  "You are not a teenager")
  console.log(age)
  ternaryTeenager(17)

}

function switchAge(age) {
  switch(age >= 13 && age <= 19) {
    case true:
      return "You are a teenager"
      break;
      default:
      return "You have an age"

  }

}
