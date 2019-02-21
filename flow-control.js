function basicTeenager(age) {

if(age>12&&age<20){
  return 'You are a teenager!'
}
return undefined
}

function teenager(age) {
  var string="You are not a teenager"

  if(age>12&&age<20){
    return 'You are a teenager!'
  }
  return "You are not a teenager"
}

function ageChecker(age) {

  if(age>12&&age<20){
    return 'You are a teenager!'
  }

  else if (age<13) {
      return "You are a kid"
  }

  else {
      return "You are a grownup"
  }

}

function ternaryTeenager(age) {
  var string="You are not a teenager"

  if(age>12&&age<20){
    return 'You are a teenager'
  }
  return "You are not a teenager"
}

function switchAge(age) {
  if(age>12&&age<20){
    return 'You are a teenager'
  }
  return "You have an age"
}
