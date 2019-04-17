function basicTeenager(age) {
  if (typeof(age) === "number"){
    if (age >= 13 && age <= 19){
      return "You are a teenager!";
    }
  }
  return undefined;
}

function teenager(age) {
  var result = basicTeenager(age);
  if (result === undefined){
    return "You are not a teenager";
  }
  return result;

}

function ageChecker(age) {
  if (typeof(age) === "number"){
    if (age <= 12){
      return "You are a kid";
    }
    else if (age >= 13 && age <= 19){
      return "You are a teenager!";
    }
    else{
      return "You are a grownup";
    }
  }

}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age >= 13 && age <= 19){
    case true:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
