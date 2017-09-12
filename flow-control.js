function basicTeenager(age) {

       switch(age) {
         case 13:
         case 14:
         case 15:
         case 16:
         case 17:
         case 18:
         case 19:
          return 'You are a teenager!';
         break;
         default:
          return undefined;

          }

}

function teenager(age) {

  switch(age) {
    case 13:
     return 'You are a teenager!';
    break;
    default:
     return "You are not a teenager";

     }
}

function ageChecker(age) {
  switch(age) {
    case 13:
     return 'You are a teenager!';
    break;
    case 12:
     return 'You are a kid';
    break;
    case 29:
     return 'You are a grownup';
    break;
    default:
     return "You are not a teenager";

     }
}

function ternaryTeenager(age) {
  switch(age) {
    case 15:
     return 'You are a teenager';
    break;
    case 75:
     return 'You are not a teenager';
    break;
    default:
     return "You are not a teenager";

     }
}

function switchAge(age) {
  switch(age) {
    case 15:
     return 'You are a teenager';
    break;
    default:
     return "You have an age";

}
}
