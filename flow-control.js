function basicTeenager(age) {
  if (age >= 13 && age <=19) return "You are a teenager!";
}

function teenager(age) {
  if (age >= 13 && age <=19) return "You are a teenager!";
  else return "You are not a teenager";
}

/*If the age is between 13-19 it should return `"You are a teenager!"`. If the age is 12 or below, it should return `"You are a kid"`. If the age is above 19, it should return `"You are a grownup"`
*/
function ageChecker(age) {
  if (age > 19) return "You are a grownup";
  else if (age >= 13 && age <=19) return "You are a teenager!";
  else if (age <=12) return "You are a kid";
}

/*+ Define a function `ternaryTeenager` that accepts age as a parameter. The body of the function should use the ternary operator to return `"You are a teenager"` if age is between 13-19 and returns `"You are not a teenager"` if the age is anything else.
*/
function ternaryTeenager(age) {
  return (age >= 13 && age <=19) ? "You are a teenager" : "You are not a teenager";
}

/*+ Define a function `switchAge` that accepts an age as a parameter. The case statement should switch on `age` and return `"You are a teenager"` if the age is 13, 14, 15, 16, 17, 18, or 19, and return `"You have an age"` as the default.
*/
function switchAge(age) {
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }

}
