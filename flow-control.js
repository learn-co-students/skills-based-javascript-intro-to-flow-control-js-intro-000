function basicTeenager(age) {
  if(age >= 13 && age <= 19) {
    return ("You are a teenager!");
  }
}

console.log(basicTeenager(13));
console.log(basicTeenager(10));

function teenager(age) {
  if(age >= 13 && age <= 19) {
    return ("You are a teenager!");
  }
  else {
    return ("You are not a teenager");
  }
}

console.log(teenager(15));

function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return ("You are a teenager!");
  }
  else if(age <=12 ){
    return ("You are a kid");
  }
  else {
    return ("You are a grownup");
  }
}

console.log(ageChecker(15));

function ternaryTeenager(age) {
  return ((age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager");
}

console.log(ternaryTeenager(15));

function switchAge(age) {
	switch(age) {
		case 13:
			return ("You are a teenager");
		case 14:
			return ("You are a teenager");
		case 15:
			return ("You are a teenager");
		case 16:
			return ("You are a teenager");
		case 17:
			return ("You are a teenager");
		case 19:
			return ("You are a teenager");
    default:
      return ("You have an age");
	}
}

console.log(switchAge(15));
