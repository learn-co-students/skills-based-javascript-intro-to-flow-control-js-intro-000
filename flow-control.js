function basicTeenager(age) {

  if(age >= 13 && age <=19){
    return "You are a teenager!"
  }
  return undefined

}

function teenager(age) {

  if(age >= 13 && age <=19){
    return 'You are a teenager!'
  }
  else{
    return "You are not a teenager"
  }

}

function ageChecker(age) {
  //var msg = "You are not a teenager"
  if(age >= 13 && age <=19){
    return 'You are a teenager!'
  }
  else if(age<=12){
    return "You are a kid"
  }
  else if(age>19){
    return "You are a grownup"
  }

  return undefined

}

function ternaryTeenager(age) {

 return (age >= 13 && age <=19) ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  var msg = "You are a teenager"
  switch (age){
    case 13:
      break;
    case 14:
      break;
    case 15:
      break;
    case 16:
      break;
    case 17:
      break;
    case 18:
      break;
    case 19:
      break;
    default:
      msg = "You have an age"
      

  }
    return msg
}
