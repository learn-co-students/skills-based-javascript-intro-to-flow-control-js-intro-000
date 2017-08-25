function basicTeenager(age) {
        if (age >= 13 && age <= 19) {
        return"You are a teenager!";
      }
   }

   function ageChecker(age) {
          if (age>= 13 && age<= 19) {
       return"You are a kid";
   } else {
       return"You are a grownup";
     }
       }


       function ternaryTeenager(age)  {
          conditionToTest (age >=13 && age <=19); valueToBeReturnedIfTrue ("You are a teenager");
          valueToBeReturnedIfFalse ("You are not a teenager");
       }

function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager";
      break;
    case 14:
       return "You are a teenager";
       break;
    case 15:
       return "You are a teenager";
       break;
    case 16:
       return "You are a teenager";
       break;
    case 17:
       return "You are a teenager";
       break;
    case 18:
       return "You are a teenager";
       break;
    case 19:
       return "You are a teenager";
       break;
    default:
    console.log ("You have an age");
    }
}
