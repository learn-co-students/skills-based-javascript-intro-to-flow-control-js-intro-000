//passing
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    var message = 'You are a teenager!';
    return message;
  }
}
//super passing
function teenager(age) {
  if (age >= 13 && age <= 19) {
    var message = 'You are a teenager!';
    return message;
  } else if (age < 13 || age > 19) {
      message = 'You are not a teenager'
      return message;
  }
}
//super wicked passing
function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    var message = 'You are a teenager!';
    return message;
  } else if (age <= 12) {
      message = 'You are a kid';
      return message
  } else if (age >=20) {
      message = 'You are a grownup';
      return message
  }
}
//like super wicked passing for sure
function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? 'You are a teenager' : 'You are not a teenager';
}
//ya no it's like super wicked passing for sure tho
function switchAge(age) {
  switch(age) {
    case 13:
      return 'You are a teenager';
    case 14:
      return 'You are a teenager';
    case 15:
      return 'You are a teenager';
    case 16:
      return 'You are a teenager';
    case 17:
      return 'You are a teenager';
    case 18:
      return 'You are a teenager';
    case 19:
      return 'You are a teenager';
    default: 
      return 'You have an age';
  }
}
