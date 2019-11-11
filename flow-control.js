function basicTeenager(age) {
  if(age > 12  && age < 20){
    return "You are a teenager!";
  }
}

function teenager(age) {
 if (age > 12  && age < 20) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }

}

function ageChecker(age) {
if (age > 12  && age < 20) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  } else if (age > 19) {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var anwser = "You are a teenager"
  switch(age){
    case 13:
      return anwser;
    case 14:
      return anwser;
    case 15:
      return anwser;
    case 16:
      return anwser;
    case 17:
      return anwser;  
    case 18:
      return anwser;
    case 19:
      return anwser;
    default:
     return "You have an age";
  }
}
