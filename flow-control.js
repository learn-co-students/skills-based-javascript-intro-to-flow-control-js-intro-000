function basicTeenager(age) {
  if (age>=13 && age<=19){
    return "You are a teenager!";
  }
  return undefined
}

function teenager(age) {
  if (age>=13 && age<=19){
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }

}

function ageChecker(age) {
  if (age<=12){
    return "You are a kid"
  } else if (age>=13 && age <=19){
    return "You are a teenager!"
  } else if (age>=20){
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (age>=13 && age<=19){
    return "You are a teenager";
  } else {
    return "You are not a teenager"
  }
}

function switchAge(age) {
  var re;
  if (age >=13 && age<=19){
    re="You are a teenager";
  } else {
    re="You have an age"
  }
  return re;
}
