function basicTeenager(age) {
  // basicTeenager should return "You are a teenager!" if the age is between 13-19
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!" // if the age is between 13-19
  } else {
    return "You are not a teenager"; // if the age is not between 13-19
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";  // if the age is between 13-19
  } else if (age > 19) {
    return "You are a grownup"; // if the age is 20 or above
  } else if (age < 13) {
    return "You are a kid"; // if the age is 12 or below
  }
}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager"; // if age is between 13-19
  } else {
    return "You are not a teenager"; // if age not between 13-19
  }
}

function switchAge(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager"; // if age is between 13-19
  } else {
    return "You have an age"; // if age not between 13-19
  }
}

if (5 > 3) {
  console.log("5 es mayor que 3");
}

if (5 < 3) {
  console.log("5 es menor que 3");
} else if (4 == 2) {
  console.log("4 es igual que 2");
} else {
  console.log("nada se cumple");
}

5 < 3 ? console.log("5 es menor que 3") : console.log("5 no es menor que 3");

var valor = 5
switch (valor) {
  case 1:
      console.log("es 1");
      break;
  case 5:
      console.log("es 5");
      break;
  default:
      console.log("nada se cumple");
}
