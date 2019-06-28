function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
  }
}

basicTeenager(17);

function teenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";

  } else {

      return "You are not a teenager";
    }
}
teenager(30);


function ageChecker(age) {

  if (age >= 13 && age <= 19) {

      return "You are a teenager!";

    } else if (age < 13) {

      return "You are a kid";

    } else {

      return "You are a grownup";
    }

}

ageChecker(30);

function ternaryTeenager(age) {
  if (age >= 13 && age <=19) {
   return (age? "You are a teenager":"You are not a teenager");
 } else { return ("You are not a teenager")}
}

(ternaryTeenager(27));


function switchAge(age) {
  switch (age >= 13 && age <= 19) {
    case "You are a teenager":
    console.log("You are a teenager");

      break;
    default:
    console.log("You have an age");

  }
}

switchAge(16);
  
