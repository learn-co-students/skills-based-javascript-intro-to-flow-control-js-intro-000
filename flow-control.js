function basicTeenager(age) {
  if (age > 12 && age < 20){
  return("You are a teenager!");
}
}

basicTeenager(13);

function teenager(age) {
  if (age > 12 && age < 20){
  return("You are a teenager!");
  }else {
  return("You are not a teenager");
}
}

teenager(20);

function ageChecker(age) {
if (age > 12 && age < 19) {
  return("You are a teenager!");
} else if (age < 13) {
  return ("You are a kid");
} else {
  return("You are a grownup");
}
}
ageChecker(25);

function ternaryTeenager(age) {
  return (age > 12 && age < 20)? "You are a teenager" : 
  "You are not a teenager";

}
ternaryTeenager(20);

  function switchAge(age) {
    switch(age){
      case 13:
        return("You are a teenager");
        
      case 14:
        return("You are a teenager");
        
      case 15:
        return("You are a teenager");
        
      case 16:
        return("You are a teenager");
       
      case 17:
        return("You are a teenager");
      
      case 18:
        return("You are a teenager");
       
      case 19:
        return("You are a teenager");
      
      default:
      return("You have an age");
        
        
    }
  
  }
  
  switchAge(13); 



