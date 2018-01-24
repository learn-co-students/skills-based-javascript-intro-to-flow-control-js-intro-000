

function basicTeenager(age) {
  if (age >= 13 && age <= 19) {

return "You are a teenager!"; // do something
  }


}

function teenager(age) {

if (age >= 13 && age <= 19) {
return "You are a teenager!";  // executed if `conditionToTest` is truthy
} 
else {
    
return "You are not a teenager"// executed if `conditionToTest` is falsey
}

}



function ageChecker(age) {

if (age >= 13 && age <= 19) {
 // condition is false hence code is not executed
return "You are a teenager!";
} else if (age >= 12 && age <= 13) {

return "You are a kid";
  // execute this code if `conditionToTest1` statement is falsey AND `conditionToTest2` is truthy
} else { (age < 19  && age > 19  )
return "You are a grownup";
  
  // execute this code iff none of the other conditions are met

}

}

function ternaryTeenager(age) {


if (age >= 13 && age <= 19) {  return "You are a teenager" 
 }
else {return "You are not a teenager"
  
}

//return (age >= 13 && <= age 19 )? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(age) {

  switch(age) {
case 13:
   case 14:
   case 15:
   case 16:
   case 17:
   case 18:
   case 19:
    return 'You are a teenager';
   default:
    return 'You have an age';
    }



}
