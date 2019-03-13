function basicTeenager(age) {
if (13 <= age && age<=19){
  return 'You are a teenager!'
}
else {
  return undefined
}
}

function teenager(age) {
  if (13 <= age && age<=19){
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (13 <= age && age<=19){
    return 'You are a teenager!'
  }
  if (age <= 12) {
    return 'You are a kid'
  }
  if (age >= 20) {
    return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
  if (13 <= age && age<=19){
    return 'You are a teenager'
  }
  else {
    return 'You are not a teenager'
  }
}

function switchAge(age) {
if (13 <= age && age<=19) {
  return 'You are a teenager'
}
else {
  return 'You have an age'
}
}
