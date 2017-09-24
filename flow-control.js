function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}

//This code is working
function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

//this code is working.

function ageChecker(age) {
  if (age >= 13 && age <= 19){
   return "You are a teenager!"
 } else if (age <= 12) {
    return "You are a kid"
} else {
   return "You are a grownup"
 }
}

//code is work make sure to add RETURN  for TERNARY OPERATOR
function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager": "You are not a teenager"

}


//switch statements check to see if a single element matches ease case
function switchAge(age) {
  switch (age) {
    case 13:
      return "You are a teenager"
      case 14:
        return "You are a teenager"
        case 15:
          return "You are a teenager"
          case 16:
            return "You are a teenager"
            case 17:
              return "You are a teenager"
              case 18:
                return "You are a teenager"
                case 19:
                  return "You are a teenager"
    default:
    return "You have an age"
  }
}
