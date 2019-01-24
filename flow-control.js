function basicTeenager(age) {
  if(age >= 13 && age <=19) {
    return "You are a teenager!"
    }
}

basicTeenager(13);
basicTeenager(12);


function teenager(age) {
  if(age >= 13 && age <=19) {
    return "You are a teenager!"
    } else {
      return "You are not a teenager"
      }
}

teenager(13);
teenager(29);
teenager(12);


function ageChecker(age) {
  if(age >= 13 && age <=19) {
    return "You are a teenager!"
  } else if (age <= 12) {
      return "You are a kid"
    } else {
        return "You are a grownup"
        }
}

ageChecker(13);
ageChecker(12);
ageChecker(29);


function ternaryTeenager(age) {
  return (age >= 13 && age <=19) ? "You are a teenager" : "You are not a teenager"
}

ternaryTeenager (15);
ternaryTeenager (75);


/* THIS CODE DID NOT WORK

function switchAge(age) {
  switch (age) {
    case age == 13|| age == 14 || age == 15 || age == 16 || age == 17 || age == 18 || age == 19:
    return "You are a teenager"
    default:
    return "You have an age"
    }
}*/

function switchAge(age) {
return (age >= 13 && age <=19) ? "You are a teenager" : "You have an age"
}


switchAge(15);
switchAge(7);
switchAge(75);
