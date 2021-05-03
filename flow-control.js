are = "You are a teenager"
arent = "You are not a teenager"

function basicTeenager(age) {
if (age > 12 && age < 20) { return 'You are a teenager!' }
}

function teenager(age) {
if (age > 12 && age < 20) { return 'You are a teenager!' }
else { return 'You are not a teenager' }
}

function ageChecker(age) {
if (age < 13) { return 'You are a kid'}
else if (age > 19) { return 'You are a grownup' }
else { return 'You are a teenager!' }
}

function ternaryTeenager(age) {
//if  (age > 12 && age < 20) { return "You are a teenager" }
//return "You are not a teenager"
return (age > 12 && age < 20) ?
are:
arent
}

function switchAge(age) {
switch(age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    return are
  default:
     return "You have an age"
}
}


console.log(switchAge(14))
console.log(switchAge(19))
console.log(switchAge(20))