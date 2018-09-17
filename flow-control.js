function basicTeenager(age) {

if(age === 13){
  return "You are a teenager!"
}

}

function teenager(age) {

  return 13 <= age && age <= 19 ? "You are a teenager!" : "You are not a teenager"


}

function ageChecker(age) {

if(13 <= age && age <= 19){
  return "You are a teenager!"
}

if(age < 13){
  return "You are a kid"
}

if(age > 19){
  return "You are a grownup"
}

}

function ternaryTeenager(age) {

  return 13 <= age && age <= 19 ? "You are a teenager" : "You are not a teenager"


}

function switchAge(age) {

  return 13 <= age && age <= 19 ? "You are a teenager" : "You have an age"


}
