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
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return 'You are a teenager';
    default:
      return 'You have an age';
  }
}
switchAge(19);
