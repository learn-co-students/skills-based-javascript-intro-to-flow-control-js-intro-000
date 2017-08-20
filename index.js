function ageChecker(age) {
  if(age<=12) {
    return "You are a kid";
  }else if(age>=13 && age<=19) {
    return "You are a teenager!";
  }else {
    return "You are a grownup";
  }
}