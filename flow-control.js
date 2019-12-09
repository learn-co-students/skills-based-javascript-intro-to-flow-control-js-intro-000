function basicTeenager(age) {
  if(age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18 || age === 19) {
    return "You are a teenager!";
  }

/* ANOTHER SOLUTION (replaces if-statement above)
if(age < 13 || age > 19) {
    console.log("You are not a teenager!");
  } else {
    return "You are a teenager!";
  }
*/

}

function teenager(age) {
  if(age < 13 || age > 19) {
    return "You are not a teenager";
  } else {
    return "You are a teenager!";
  }
}

function ageChecker(age) {
if(age < 13) {
  return "You are a kid";
} else if (age > 19) {
  return "You are a grownup";
} else {
  return "You are a teenager!";
}
}

function ternaryTeenager(age) {
return age < 13 || age > 19 ? "You are not a teenager" : "You are a teenager"
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
