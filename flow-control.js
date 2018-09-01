

function basicTeenager(age) {
  if (age <= 19 && age => 13){
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age <= 19 && age => 13){
    console.log ("You are a teenager!");
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age <= 19 && age => 13) {
    console.log ("You are a teenager!");
  }
  else if (age <= 12) {
    console.log ("You are a kid");
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
    (age < 19 && age => 13) ?return
      ("You are a teenager!") : ("You are not a tennager");
}

function switchAge(age) {
  switch (age) {
    case age <= 19 && age => 13:
    console.log("You are a teeanger");
    break;
  default:
    return "You have an age"
    break;
  }
