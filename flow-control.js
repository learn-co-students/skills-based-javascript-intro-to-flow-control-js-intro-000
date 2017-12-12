function basicTeenager(age) {
  if (age > 12 && age < 20) {
  return("You are a teenager!");
  }
}

function teenager(age) {
  if (age > 12 && age < 20){
    return("You are a teenager!");
  } else {
    return("You are not a teenager");
  }
}

function ageChecker(age) {
  if (age > 12 && age < 20){
    return("You are a teenager!");
  } else if (age < 13) {
    return("You are a kid");
  } else {
    return("You are a grownup");
  }
}

function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch(age){
    case 15:
      return("You are a teenager");
      break;
    case 75:
      return("You have an age");
      break;
    case 7:
      return("You have an age");
      break;
  }
}

basicTeenager(13);
basicTeenager(12);
teenager(13);
teenager(29);
ageChecker(13);
ageChecker(12);
ageChecker(29);
ternaryTeenager(15);
ternaryTeenager(75);
switchAge(15);
switchAge(75);
switchAge(7);
