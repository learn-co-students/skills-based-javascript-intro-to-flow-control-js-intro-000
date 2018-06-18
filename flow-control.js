var age = 15

function basicTeenager(age) {
  if (age >= 13 && <= 19) {
    return "You are a teenager!"
  }
}
basicTeenager(15);

function teenager(age) { if (age >= 13 && <= 19) {return "you are a teenager!"}
else {return "you are not a teenager"}

};

function ageChecker(age) { if (age >= 13 && <= 19) {return "you are a teenager!"}
else if (age < 12) {return "you are a kid!"}
else {return "you are a grownup"}

};

function ternaryTeenager(age) { return true
  if (age >= 13 && <= 19 ) {return false}

}

function switchAge(age) {
  var age = 12;
  switch(age) {
    case 13 || 14 || 15 || 16 || 17 || 18 || 19 :
    return "you are a teenager";
    break;
    default:
    return "you have an age";
  }


}
