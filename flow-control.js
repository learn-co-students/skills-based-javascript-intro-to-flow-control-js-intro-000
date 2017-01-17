function basicTeenager(age) {
  if(age >= 13 && age <= 19) {
    return `You are a teenager!`
  }
}

function teenager(age) {
  if(age < 13 || age > 19) {
    return `You are not a teenager`;
  } else {
    return basicTeenager(age);
  }
}

function ageChecker(age) {
  if(age < 13) {
    return `You are a kid`;
  } else if (age > 19) {
    return `You are a grownup`;
  } else {
    return basicTeenager(age);
  }
}

function ternaryTeenager(age) {
  if(age >= 13 && age <= 19) {
    return `You are a teenager`;
  } else {
    return `You are not a teenager`;
  }
}

function switchAge(age) {
  if(age >= 13 && age <= 19) {
    return `You are a teenager`;
  } else {
    return `You have an age`;
  }
}
