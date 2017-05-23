function basicTeenager(age) {if (age>12 && age<20) {return ("You are a teenager!")}

}

function teenager(age) {if (age>=13 && age<=19) {return "You are a teenager!"}
else {return "You are not a teenager"}}


function ageChecker(age) {if (age>=13 && age<=19) {return "You are a teenager!"}
else if (age<13) {return "You are a kid"} else if (age>19) {return "You are a grownup"}
}

function ternaryTeenager(age) {return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {var age = "13"
switch(age) {
    case (age>12 && age<20):
    console.log("You are a teenager");
    break;
    default: "You have an age"

}}
