function basicTeenager(age) {
  console.log("basicTeenager Age" +age);
  if (age>= 13 && age <=19){
    return "You are a teenager!";
  }else{
    return undefined;
  }
}

function teenager(age) {
    console.log("teenager Age" +age);
  if(age>=13 && age <20){
    return "You are a teenager!";
    //return basicTeenager(age);
  }else{
    return "You are not a teenager";
  }
}

function ageChecker(age) {
      console.log("ageChecker Age" +age);
  if(age <= 12){
    return "You are a kid";
  }else if(age > 20){
    return "You are a grownup";
  }else{
    return teenager(age);
  }
}

function ternaryTeenager(age) {
  return (age>=13 && age<20) ?  "You are a teenager" :  "You are not a teenager";
}

function switchAge(age) {
  switch(true) {
    case (age >= 13 && age < 20):
       return "You are a teenager";
    default:
       return "You have an age";
  }
}
