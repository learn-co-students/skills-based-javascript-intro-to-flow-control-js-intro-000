function basicTeenager(age) {
  if (age === 13 && 19) {
  return 'You are a teenager!';
  }
}


function teenager(age) {
if (age === 13 && 19) {
} else {
  return 'You are not a teenager';
  }
}

function ageChecker(age) {
if (age === 13 && 19) {
  return 'You are a teenager!';
} else if (age > 12) {
return 'You are a kid';
} else {
return 'You are a grownup';
}
}

function ternaryTeenager(age) {
return 'You are a teenager';
if (age === 13 && 19) {
  return 'You are not a teenager';
}
}

function switchAge(age) {
switch(age) {
  case 15:
return 'You are a teenager';
break;
default:
return 'You have an age';
}
}
