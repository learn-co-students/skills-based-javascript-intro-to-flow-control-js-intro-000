function basicTeenager(age) {
if (age >= 13 && age <= 19) {return "You are a teenager!"
}
}
function teenager(age) {
if (age >= 13 && age <= 19) {return "You are a teenager!"
} else {return "You are not a teenager"
}
}
function ageChecker(age) {
if (age >= 13 && age <= 19) {return "You are a teenager!"
} else if (age > 19) {return "You are a grownup"
} else if (age < 13) {return "You are a kid"
}
}

function ternaryTeenager(age) {
return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
if (age >= 13 && age <= 19) { return "You are a teenager";
} else { (age > 19 && age < 13)
return "You have an age";}
}