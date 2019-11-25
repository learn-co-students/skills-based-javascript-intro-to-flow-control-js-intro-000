function basicTeenager(age) {
  if(age > 12 && age < 20){
    return("You are a teenager!");
  }

}

function teenager(age) {
  if(age > 12 && age < 20){
    return("You are a teenager!");
  } else {return("You are not a teenager")
  }

}

function ageChecker(age) {
  if(age > 12 && age < 20){
    return("You are a teenager!");
  } else if(age <= 12){
    return("You are a kid");
  } else {return("You are a grownup")}

}

function ternaryTeenager(age){
  return (age > 12 && age < 20) ? "You are a teenager" :
"You are not a teenager"
}

function switchAge(age) {
  switch (age) {
   case (age = 13):
   case (age = 14):
   case (age = 15):
   case (age = 16):
   case (age = 17):
   case (age = 18):
   case (age = 19):
     return("You are a teenager");
    break;
   default:
     return("You have an age");
  }
}
