
function basicTeenager(age) {
  console.log("basicTeenager function.");
  if  (age >= 13 && age <= 19 ){
      return("You are a basic teenager!");
  }
}

function teenager(age) {
  console.log("teenager function.")
  if  (age >= 13 && age <= 19 ){
      return("You are a teenager!")
  }
  else {
    return("You are not a teenager")
  }
}
  
function ageChecker(age) {
  console.log("ageChecker function")
  if (age >= 13 && <= 19){
    return("You are a teenager!")
  }
  else if (age > 19){
    return("You are an adult")
  }
}

function ternaryTeenager(age) {
  console.log("ternary function")
//  if (age >= 13 && <=19){
  return age >=13 & <=19 ? 
    alert("You are a teenager") :
    alert("You are not a teenager")
  }
}

function switchAge(age) {
  console.log("switch function")
  switch(age) {
    case "13":
      return "You are a teenager" 
    case "14":
      return "You are a teenager"
    case "15":
      return "You are a teenager"
    case "16":
      return "You are a teenager"
    case "17":
      return "You are a teenager"
    case "18":
      return "You are a teenager"
    case "19":
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
