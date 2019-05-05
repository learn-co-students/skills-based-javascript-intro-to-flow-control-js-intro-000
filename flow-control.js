function basicTeenager(age) {
  if ((age >= 13)&& (age <= 19)){
    return "You are a teenager!";
  }

}

function teenager(age) {
  if ((age >= 13)&& (age <= 19)){
    return "You are a teenager!";
  }
  else { return "You are not a teenager";}
}

function ageChecker(age) {
  if ((age >= 13)&& (age <= 19)){
    return "You are a teenager!";
  }
  else if (age < 13){
    return "You are a kid";
  }
  else { return "You are a grownup";}
}

function ternaryTeenager(age) {
return ((age >=13)&& (age <=19))? "You are a teenager": "You are not a teenager";
}

function switchAge(age) {
  let ageString = "";
  switch (age){
    case 13: ageString = "You are a teenager";break;
    case 14: ageString = "You are a teenager";break;
    case 15: ageString = "You are a teenager";break;
    case 16: ageString = "You are a teenager";break;
    case 17: ageString = "You are a teenager";break;
    case 18: ageString = "You are a teenager";break;
    case 19: ageString = "You are a teenager";break;
    default: ageString = "You have an age";
  }
  return ageString;
}
