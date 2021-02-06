function basicTeenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!"
  } else if (age <= 12){
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  (age >= 13 && age <= 19) ? phrase = "You are a teenager": phrase = "You are not a teenager"
  return phrase
}

//function switchAge(age) {
  //let phrase = "";
  //switch(age){
  ///  case (age >= 13  age <= 19):
    //  return = ("You are a teenager")
      //break;
  //  default:
    //  return = ("You have an age")
//  }
  //return phrase
//}
