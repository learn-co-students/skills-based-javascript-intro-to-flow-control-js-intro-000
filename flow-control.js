function basicTeenager(age) {
  if ((age >= 13 && age <= 19)) {
    return "You are a teenager!";
  }
};
console.log(basicTeenager(13));
console.log(basicTeenager(12));

function teenager(age) {
  if ((age >= 13 && age <= 19)) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
  }
console.log(teenager(13));
console.log(teenager(12));
console.log(teenager(29));

function ageChecker(age) {
  if ((age >= 13 && age <= 19)) {
    return "You are a teenager!"
  } else if (( age <=12)) {
    return "You are a kid"
  }  else if (( age >= 20)) {
    return "You are a grownup"
  }
};
console.log(ageChecker(13));
console.log(ageChecker(12));
console.log(ageChecker(29));


function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  switch(age) {
    case (13):
    case(14):
    case(15):
    case(16):
    case(17):
    case(18):
    case(19):
      return ("You are a teenager");
      break;
      default:
      return "You have an age"
  }

}
