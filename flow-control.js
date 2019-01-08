function basicTeenager(age) {
  if(age>=13 && age<=19){
  return 'You are a teenager!'
}

}

function teenager(age) {
  if(age>=13 && age<=19){
    return "You are a teenager!"
  }

}

function ageChecker(age) {
  if(age===12){
  return "You are a kid"
  if (age===20){
    return "You are a grownup"
  }
}

}

function ternaryTeenager(age) {
  return age >=13 && age <= 19 ?
  "You are a teenager" : "You are not a teenager"
}


function switchAge(age) {
  switch (age) {
    case 12:
    return 'You are a teenager'
    case 13:
    return "You have an age"

      break;
    default: 20
    return "You are grownup"

  }

}
