function basicTeenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else{
    return undefined;
  }
}
basicTeenager(13);
basicTeenager(12);

function teenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else{
    return "You are not a teenager";
  }
}
teenager(13);
teenager(12);
teenager(29);

function ageChecker(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else if(age <= 12){
    return "You are a kid";
  }
  else if(age >= 20){
    return "You are a grownup";
  }
}
ageChecker(13);
ageChecker(12);
ageChecker(29);

function ternaryTeenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager";
  }
  else{
    return "You are not a teenager";
  }
}
ternaryTeenager(15);
ternaryTeenager(75);

function switchAge(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager";
  }
  else{
    return "You have an age";
  }
}
switchAge(15);
switchAge(75);
switchAge(7);