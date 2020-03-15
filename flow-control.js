function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }

}

function teenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  } else {
     return "You are not a teenager"
  }

}

function ageChecker(age) {       // determines your age group
   if (age >= 13 && age <= 19) { // checks if you're a teenager
    return "You are a teenager!" // confirms that you're a teenager
  } else if (age <= 12) {        // checks if you're a kid      
     return "You are a kid"       // confirms that you're a kind
  } else {                        
     return "You are a grownup"  // confirms that you are a grownup
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager");
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
     return "You have an age";
      
  }

}
