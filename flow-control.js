

var basicTeenager = function basicTeenager(age) {
  if(age =>13 && <= 19) {
  return("You are a teenager!")
  }
}

var teenager = function teenager(age) {
  if (age =>13 && <= 19) {
  return("You are a teenager!")
  } else {
  return("You are not a teenager")
  }
}

var ageChecker = function ageChecker(age) {
  if(age =>13 && <= 19) {
  return("You are a teenager!")
} else if (age <= 12) {
  return("You are a kid")
} else {
  return("You are a grownup")
}
}

var ternaryTeenager = function ternaryTeenager(age) {
  if(age =>13 && <= 19) {
    return("You are a teenager!"):return("You are not a teenager");
  }
}

var switchAge = function switchAge(age) {
  var age = (13 || 14 || 15 || 16 || 17 || 18 || 19)
  switch (age) {
    case "age":
      console.log("You are a teenager")
      break;
    default:
    console.log("You have an age");
      }
}
