function basicTeenager(age) {
  if (age > 12 && age < 19)           //if your age is greater than 12 and less than 19
    return "You are a teenager!";     //then return "You are a teenager!""
  else
    return undefined;
}

function teenager(age) {
  if (age > 12 && age < 19)           
    return "You are a teenager!";     
  else
    return "You are not a teenager";
}

function ageChecker(age) {
  if (age > 12 && age < 19)
    return "You are a teenager!";
  else if (age < 13)                //else if age is less than 13...
    return "You are a kid";
  else if (age > 19)                //else if age is greater than 19... 
    return "You are a grownup";
}

/*The Ternary Operator... 
Just stick with if and else statements for more understandable code...
Format:
return conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse
*/
function ternaryTeenager(age) {
  return (age > 12 && age < 19) ? "You are a teenager" : "You are not a teenager";            
}

/*Switch Statements
*/
function switchAge(age) {
  switch (age){
    case 15:
      return "You are a teenager"
    case 75:
      return "You have an age"
    case 7:
      return "You have an age"
  } 
}
