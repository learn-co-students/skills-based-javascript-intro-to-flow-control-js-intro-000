function basicTeenager(age) {
 if(age >=13 && age <=19){
   return "You are a teenager!"
 }

}
basicTeenager(12);


function teenager(age) {
  if(age >=13 && age <=19){
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}
teenager(13);
teenager(12);
teenager(29);

function ageChecker(age) {
  if (age >=13 && age <=19) {
    return "You are a teenager!"
  } else if (age <= 12) {
    return "You are a kid"
  } else if (age >= 20){
    return "You are a grownup"
  }
}


function ternaryTeenager(age) {
  if (age >=13 && age <=19) {
    return "You are a teenager"
  }
  else {
    return "You are not a teenager"
  }
}

function switchAge(age) {
  switch(age) {
    case (15):
      return "You are a teenager"
      break;
    default:
      return "You have an age"
  }
}
