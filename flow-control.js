function basicTeenager(age) {
  // if the age is between 13 and 19, return "You are a teenager!"

  if (age <= 19 && age >=13) {
    return "You are a teenager!";
  }

}

function teenager(age) {

  if (age <= 19 && age >=13) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {

 // If the age is between 13-19 it should return "You are a teenager!".
 // If the age is 12 or below, it should return "You are a kid".
 // If the age is above 19, it should return "You are a grownup"
   if (age <= 19 && age >=13) {
     return "You are a teenager!";
   } else if (age <= 12) {
     return "You are a kid";
   } else {
     return "You are a grownup";
   }

}

function ternaryTeenager(age) {

 return (age <= 19 && age >=13) ? "You are a teenager" : "You are not a teenager";

}


// Define a function switchAge that accepts an age as a parameter. The case statement should switch on age and
// return "You are a teenager" if the age is 13, 14, 15, 16, 17, 18, or 19, and return "You have an age" as the default.
// function switchAge(age) {
//
//   case 13:
//     return 'You are a teenager';
//
//   case 14:
//     return 'You are a teenager';
//
//   case 15:
//     return 'You are a teenager';
//
//   case 16:
//     return 'You are a teenager';
//
//   case 17:
//     return 'You are a teenager';
//
//   case 18:
//     return 'You are a teenager';
//
//   case 19:
//     return 'You are a teenager';
//
//   default:
//     return "You have an age";
// }
