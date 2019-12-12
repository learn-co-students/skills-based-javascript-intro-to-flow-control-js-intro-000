function basicTeenager(age) {
if (age >= 13 && age <= 19){
  return 'You are a teenager!'
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  }
  else if (age <13){
    return 'You are a kid'
  }
  else if (age > 19){
    return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
return age >= 13 && age <= 19 ?
'You are a teenager' :
'You are not a teenager'
}

function switchAge(age) {
  switch (age){
    case (age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18 || age === 19):
      return 'You are a teenager'
      break;
    default:
      return 'You have an age'
      break;
    }
  }
