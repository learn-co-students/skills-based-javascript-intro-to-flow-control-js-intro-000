function basicTeenager(age) {
  let result;
     if(age>=13 && age<=19) {
       result = "You are a teenager!";
     }
      return result;
}

function teenager(age) {
  let result;
      if (age>=13 && age<=19) {
        result = "You are a teenager!";
      } else {
        result = "You are not a teenager";
      }
       return result;
}

function ageChecker(age) {
  let result;
      if (age>=13 && age<=19) {
        result = "You are a teenager!";
      } else if (age<=12) {
        result = "You are a kid";
      } else if (age>19) {
        result = "You are a grownup" ;
      }
       return result;
}

function ternaryTeenager(age) {
 return (age>=13 && age<=19 ? "You are a teenager" : "You are not a teenager")
}

function switchAge(age) {
  switch (age) {
   case 13:
     return("You are a teenager");
   case 14:
       return("You are a teenager");
   case 15:
       return("You are a teenager");
   case 16:
       return("You are a teenager");
   case 17:
       return("You are a teenager");
   case 18:
       return("You are a teenager");
   case 19:
       return("You are a teenager");
    break;
  default:
      return("You have an age")

  }
}
