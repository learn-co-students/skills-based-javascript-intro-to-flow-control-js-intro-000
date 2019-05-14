function basicTeenager(age) {
  if (age>=13 && age<=19)
return "You are a teenager!"
}

function teenager(age) {
  if(age>=13 && age<=19)
      return("You are a teenager!")
else
  return "You are not a teenager"
}

function ageChecker(age) {
  if(age>=13 && age<=19)
      return("You are a teenager!")
  else if (age<13)
  return "You are a kid"
  else (age>19)
  return "You are a grownup"
}

function ternaryTeenager(age) {
return age >= 13 && age <= 19? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
switch(age) {
  case "14":
  console.log("You are a teenager");
  break;
  case "15":
  console.log("You are a teenager");
  break;
  case "16":
  console.log("You are a teenager");
  break;
  case "17":
  console.log("You are a teenager");
  break;
  case "18":
  console.log("You are a teenager");
  break;
  case "19":
  console.log("You are a teenager");
  break;
  default:
  console.log("You have an age")
}
}
