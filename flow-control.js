function basicTeenager(age) {
  let str = null;
  if (age >= 13 && age <= 19) {
    str = 'You are a teenager!';
  } else {
    str = undefined;
  }

  return str;
}

function teenager(age) {
  let str = null;
  if (age >= 13 && age <= 19) {
    str = 'You are a teenager!';
  } else {
    str = 'You are not a teenager';
  }

  return str;
}

function ageChecker(age) {
  let str = null;
  if (age >= 13 && age <= 19) {
    str = 'You are a teenager!';
  } else if (age <= 12) {
    str = 'You are a kid';
  } else {
    str = 'You are a grownup';
  }

  return str;
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(age) {
  let str = null;
  switch(age) {
    case age:
      if (age >= 13 && age <= 19) {
        str = "You are a teenager";
      } else {
        str = 'You have an age';
      }

      return str;

    default:
      return 'You have an age';
  }
}
