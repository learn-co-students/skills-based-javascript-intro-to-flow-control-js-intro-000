teen = 'You are a teenager';
notTeen = 'You are not a teenager';
kid = 'You are a kid';
grownup = 'You are a grownup';
haveAge = 'You have an age';

function basicTeenager(age) {
  if(age > 12 && age < 20){ return teen + '!'; }
}

function teenager(age) {
  return (age > 12 && age < 20) ? (teen + '!') : notTeen;
}

function ageChecker(age) {
  if( age > 12 && age < 20){
    return teen + '!';
  }else if (age < 13) {
    return kid;
  }else{
    return grownup;
  }
}

function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? teen : notTeen;
}

function switchAge(age) {
  switch (age) {
    case 13:
      return teen
    case 14:
      return teen
    case 15:
      return teen
    case 16:
      return teen
    case 17:
      return teen
    case 18:
      return teen
    case 19:
      return teen
    default:
      return haveAge
  }
}
