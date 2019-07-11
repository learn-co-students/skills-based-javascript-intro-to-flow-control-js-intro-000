function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    //If between the ages of 13 and 19
    return "You are a teenager!"
    // Then print "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    //If between the ages of 13 and 19
    return "You are a teenager!"
    //Then print "You are a teenager!"
  } else {
    //If above is false
    return "You are not a teenager"
    // Then print "You are not a teenager!"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    //If between the ages of 13 and 19
    return "You are a teenager!"
    //Then print "You are a teenager!"
  } else if (age <= 12) {
      //If the age is 12 and under
      return "You are a kid"
      //Then print "You are a kid!"
  } else {
      //If above is both false
      return "You are a grownup"
      //Then print "You are a grownup!"
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager";
    case 14:
      return "You are a teenager";
    case 15:
      return "You are a teenager";
    case 16:
      return "You are a teenager";
    case 17:
      return "You are a teenager";
    case 18:
      return "You are a teenager";
    case 19:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
