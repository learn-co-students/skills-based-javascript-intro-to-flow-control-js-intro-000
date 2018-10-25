function basicTeenager(age) {
 var ageCheckValue = age;
 if (ageCheckValue <= 19 && 13 <= ageCheckValue) {
    return "You are a teenager!";
 }
}

function teenager(age) {
 var ageCheckValue = age;
 if (ageCheckValue >= 13 && ageCheckValue <= 19) {
    return "You are a teenager!";
  }
  else {
   return "You are not a teenager";
  }
}

function ageChecker(age) {
  var ageCheckValue = age;
    if (ageCheckValue >= 13 && ageCheckValue <= 19) {
     return "You are a teenager!";
    }
    else if (ageCheckValue <= 12) {
      return "You are a kid";
    }
    else if (ageCheckValue > 20) {
      return "You are a grownup";
    }
}

function ternaryTeenager(age) {
  ageCheckValue = age;
  return ageCheckValue >= 13 && ageCheckValue <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  aCV = age;
  switch (aCV) {
    case 13:
    case 14: 
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}


