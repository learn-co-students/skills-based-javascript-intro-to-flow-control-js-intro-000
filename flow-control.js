function basicTeenager(age) {
  if(age >= 13 && age <= 19){
    return 'You are a teenager!';
  } else {
    return undefined;
  }
}
basicTeenager(13);

function teenager(age) {
  if(age >= 13 && age <= 19){
    return 'You are a teenager!';
  } else {
    return 'You are not a teenager';
  }
}
teenager(12);

function ageChecker(age) {
  if(age >=13 && age <= 19){
    return 'You are a teenager!';
  } else if(age <= 12) {
    return 'You are a kid';
  } else if(age >= 20) {
    return 'You are a grownup';
  }
}
ageChecker(12);

function ternaryTeenager(age) {
  var condition = age >= 13 && age <= 19;
    return condition ? 'You are a teenager' : 'You are not a teenager';
}
ternaryTeenager(15);

function switchAge(age) {
  switch(age){
    case 13 - 19:
      return 'You are a teenager';
      break;
    case 14:
      return 'You are a teenager';
      break;
    case 15:
      return 'You are a teenager';
      break;
    case 16:
      return 'You are a teenager';
      break;
    case 17:
      return 'You are a teenager';
      break;
    case 18:
      return 'You are a teenager';
      break;
    case 19:
      return 'You are a teenager';
      break;
    default:
      return 'You have an age';
  }
}
switchAge(19);
