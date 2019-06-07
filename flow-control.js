function basicTeenager(age) {
  if(age >=13 && age <=19) {
    return "You are a teenager!";
  }

}

function teenager(age) {
  if(age >=13 && age <=19) {
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if(age >=13 && age <=19) {
    return "You are a teenager!";
  }
  else {
    if(age <13)
    return "You are a kid";
    //revised from >20 below
    //also from solution it implies I do not need >19 because the only option left is if it is not <19 after the <13
    if(age >19)
    //if(age >20)
    return "You are a grownup";
  }
  // else if {
  //   if(age >19)
  //   return "You are a grownup";
  //
  // }
}

function ternaryTeenager(age) {
  if(age >=13 && age <=19) {
  return "You are a teenager";
    // if(age <13)
    // return "You are not a teenager";
    // if(age >19)
    // return "You are not a teenager";
  }
else {
 if(age <13 || age >19)
  return "You are not a teenager";
  }
}

function switchAge(age) {
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:

    return "You are a teenager";

    default:
    return "You have an age";

  }

}
