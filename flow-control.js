function basicTeenager(age) {
if (13 <= age && age <= 19){
return 'You are a teenager!'
}
}

function teenager(age) {
  if (13 <= age && age <= 19){
  return 'You are a teenager!';
}return "You are not a teenager";
}

function ageChecker(age) {
  if (13 <= age && age <= 19){
     return 'You are a teenager!';
  }
  else if (age <= 12) {
     return "You are a kid";
}
   else if (age >= 20) {
     return 'You are a grownup';
   }
}

function ternaryTeenager(age) {
   return 13 <= age && age <= 19 ? 'You are a teenager' : "You are not a teenager";
}

function switchAge(age) {
   switch(age) {
     case 15 :
       return "You are a teenager"
    default:
       return "You have an age"
   }
}
