function basicTeenager(age) {
    if (age >= 13 && age <= 19) {
    /* If both of these conditions are met then if statement is truthy then execute the following */
    return "You are a teenager!";
    }
}

function teenager(age) {
    if (age >= 13 && age <= 19) {
    /* If both of these conditions are truthy then execute */
    return "You are a teenager!";
    }
    else {
    /* If either conditions in the if statement is not truthy, then execute following instaed */
    return "You are not a teenager";
    }
}

function ageChecker(age) /* defining function ageChecker */ {
    if (age >= 13 && age <= 19) {
      /* If both of these conditions are truthy then execute */
      return "You are a teenager!";
    }
    else if (age <= 12) {
      /* If age is 12 or less then execute next code */
      return "You are a kid";
    }
    else {
      /* If both conditions are falsey then execute next code */
      return "You are a grownup";
    }
}

function ternaryTeenager(age) {
    return (age >= 13 && age <= 19) ? "You are a teenager":"You are not a teenager"
    //ternary operator if age condition matches, print left of colon, if not do the other
}

function switchAge(age) {  //for function switchAge
   switch(age) {  //switch statement with age variable
      case 13:
      return "You are a teenager";
      break;
      case 14:  // is specified age 14? is this the case?
      return "You are a teenager";  // if yes, then execute - return means interrupt further processing
      break;  //exits block and goes to the next case
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
      default:  //if none of the cases match, then execute this default code
      return "You have an age";
}
}
