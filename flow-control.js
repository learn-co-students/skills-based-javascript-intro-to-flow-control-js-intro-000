function basicTeenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!"
  }

}

function teenager(age) {
  if (13 <= age && age <= 19){
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {
  if (13 <= age && age <= 19){
    return "You are a teenager!"
  } else if (age <= 12){
    return "You are a kid"
  } else {
    return "You are a grownup"
  }

}

function ternaryTeenager(age) {
      return (13 <= age && age <= 19) ? "You are a teenager" : "You are not a teenager"
}
console.log(age(true));
console.log(age(false));

function switchAge(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager"

  } else {
    return "You have an age"
  }
}
console.log("yes", switchAge(20))
