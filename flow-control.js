if(conditionToTest) { // executed if 'conditionToTest' is truthy
} else { // executed if 'conditionToTest' is falsey
}

function basicTeenager(age) {
    if(age >= 13 && age <= 19) {
       return 'You are a teenager!'
     }
  }

function teenager(age) {
    if(age >= 13 && age <= 19) {
       return "You are a teenager!"
    } else {  
          return "You are not a teenager"
    }
    
  }
  
function teenager(age) { 

}

function ageChecker(age) { 
  if (age >= 13 && age <= 19) {
       return "You are a teenager!"
} else if (age <= 12) {
  // execute this code if `(age >= 13 && age <= 19)` statement is falsey AND `(age <= 12)` is truthy
  return "You are a kid"
} else { 
  return "You are a grownup"
  // execute this code if none of the other conditions are met
}

}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19)
return (age ? "You are a teenager" : "You are not a teenager");
}

function switchAge(age) {
  
  switch (age) {
  case "13":
    return "You are a teenager"
      break; 
        case "14":
    return "You are a teenager"
      break; 
         case "15":
    return "You are a teenager"
      break; 
         case "16":
    return "You are a teenager"
      break; 
         case "17":
    return "You are a teenager"
      break; 
         case "18":
    return "You are a teenager"
      break; 
         case "19":
    return "You are a teenager"
      break; 
    default:
      return "You have an age"
}

}
