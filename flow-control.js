function basicTeenager(age) {
   if (age >= 13 && age <= 19) {
     return "You are a teenager!"
   }
}

function teenager(age) {
  message = "You are a teenager!";
  if (basicTeenager(age)) {
    return message;
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (basicTeenager(age)) {
    return basicTeenager(age)
  } else if (age <= 12) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
   message = (basicTeenager(age)) ? "You are a teenager" : "You are not a teenager";
   return message;
}

function switchAge(age) {
   var message = "You are a teenager"
   switch (age) {
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
       message = "You have an age"
   }
   return message;
}
