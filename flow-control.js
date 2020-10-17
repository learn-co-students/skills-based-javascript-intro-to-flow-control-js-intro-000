{  
function basicTeenager(age) {
if (age>=13 && age=<19)
return "You are a teenager!"
}

function teenager(age) {
  if (age>=13 && age=<19)
  return "You are a teenager!"
  else {
    return "You are not a teenager!"
  }
}

function ageChecker(age) {
  if (age>=13 && age=<19)
  return "You are a teenager!"
  else if (age<=12)
  return "You are a kid."
  else if (age>=20)
  return "You are an adult."
}

function ternaryTeenager(age) {
return age>=13 && age<=19 ? "You are a teenager!" : "You are not a teenager!"
}

function switchAge(age) {
switch (age)
{
case age>=13 && case<=19:
return "You are a teenager!"
break;
default:
return "You have an age."
}
}

console.log(basicTeenager(16))
console.log(teenager(56))
console.log(ageChecker(10))
console.log(ternaryTeenager(17))
console.log(switchAge(44))
}
