function basicTeenager(age) {
  if(age>12 && age<19){
    return "You are a teenager!"
  }

}

function teenager(age) {
  if(!basicTeenager(age)){
    return "You are not a teenager"
  }else{
    return "You are a teenager!"
  }
}

function ageChecker(age) {
  if(basicTeenager(age)){
      return "You are a teenager!"
  }else if(age<13){
    return "You are a kid"
  }else{
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
 return  basicTeenager(age) ?  "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  var myBool;
  if(basicTeenager(age)){
    myBool = true;
  }else{
    myBool = false;
  }
  switch (myBool) {
    case true:
      return "You are a teenager"
      break;
    default:
      return "You have an age"


  }

}
