function basicTeenager(age){
  if (age>=13 && age<=19)
  {return "You are a teenager!"}
}
function teenager(age) {
  if (13<= age && age <=19 ) {
    return "You are a teenager!" }
  else {
    return ("You are not a teenager!")
  }
}

function ageChecker(age) {
  if (13<= age && age <=19 ) {
    return ("You are a teenager!")}

  else if (13 > age) {
    return ("You are a kid!")
    }

  else {
    return ("You are a grownup!")
  }
}

function ternaryTeenager(age) {
  return if (13 <= age && 19>= age) ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  case age<=19 && age >=13:
    console.log("You are a teenager");
    break;
  default:
    console.log("You have an age");
}





}
