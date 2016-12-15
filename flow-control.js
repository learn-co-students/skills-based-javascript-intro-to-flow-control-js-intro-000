function basicTeenager(age) {
  if (age between 13 and 19){
    console.log("You are a teenager!");
  }

}

function teenager(age) {
  if (age between 13 and 19) {
    console.log("You are a teenager!");
  } else {
    console.log("You are not a teenager!");
  }
}

function ageChecker(age) {
if(age between 13 and 19){
  console.log("You are a teenager!");
} elseif (age < 12){
  console.log("You are a kid!");
} else if (age > 19 ) {
  console.log("You are a grownup!");
}
}

function ternaryTeenager(age) {
if(age between 13 and 19) ? console.log("You are a teenager!") : console.log("You are not a teenager!");
}

function switchAge(age) {
  switch(age){
    case 13:
    console.log("You are a teenager");
    break;
    case 14:
    console.log("You are a teenager");
    break;
    case 15:
    console.log("You are a teenager");
    break;
    case 16:
    console.log("You are a teenager");
    break;
    case 17:
    console.log("You are a teenager");
    break;
    case 18:
    console.log("You are a teenager");
    break;
    case 19:
    console.log("You are a teenager");
    break;
    default:
    console.log("You have an age");
  }

}
