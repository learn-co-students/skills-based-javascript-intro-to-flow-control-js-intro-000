function basicTeenager(age) {
  if (age <= 19 && age >=13) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age <= 19 && age >=13) {
  return "You are a teenager!"  // executed if `conditionToTest` is truthy
  } else {
  return "You are not a teenager"  // executed if `conditionToTest` is falsey
  }
}

function ageChecker(age) {
  if (age <= 19 && age >=13) {
  return "You are a teenager!"  // condition is false hence code is not executed
} else if (age <=12) {
  return "You are a kid"  // execute this code if `conditionToTest1` statement is falsey AND `conditionToTest2` is truthy
  } else {
  return "You are a grownup"  // execute this code if none of the other conditions are met
  }
}

function ternaryTeenager(age) {
return  (age <= 19 && age >=13) ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  switch(age) {
    case 13:
    return "You are a teenager"
      break;
    case 14:
    return "You are a teenager"
      break;
    case 15:
    return "You are a teenager"
      break;
    case 16:
    return "You are a teenager"
      break;
      case 17:
      return "You are a teenager"
        break;
        case 18:
        return "You are a teenager"
          break;
          case 19:
          return "You are a teenager"
            break;
    default:
    return "You have an age"
  }
}
