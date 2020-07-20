// var age = 13;

function basicTeenager(age) {
    if (age >= 13 && age <= 19) {
        return "You are a teenager!";
    }
}
// console.log(basicTeenager(age));

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}
// console.log(teenager(age));


function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
  else if (age < 13) {
    return "You are a kid";
  }
  else if (age > 19) {
    return "You are a grownup"
  }
}




function ternaryTeenager(age) {
  return (age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager");
}

function switchAge(age) {
  switch (true) {
      case (age >= 13 && age <= 19):
          return "You are a teenager";
          console.log(age);
          break;
      default:
          return "You have an age";

  }
}
