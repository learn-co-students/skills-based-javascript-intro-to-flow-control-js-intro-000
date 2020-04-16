function basicTeenager(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager!'
  }
}

function teenager(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager!'
  }
    return 'You are not a teenager'
}

function ageChecker(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager!'
  } else if (age <= 12){
    return 'You are a kid'
  } else if (age => 20){
    return 'You are a grownup'
  }
    return 'You are not a teenager'
}

function ternaryTeenager(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager'
  } else if (age <= 12){
    return 'You are a kid'
  } else if (age => 20){
    return 'You are not a teenager'
  }
}

function switchAge(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager'
  }
    return 'You have an age'
}
