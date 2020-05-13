function basicTeenager(age) {
  if(age>=13 && age<=19)
  {return "You are a teenager!"}

}

function teenager(age) {
  if(age>=13 && age<=19)
  {
  return "You are a Teenager!"
}
  else {
    return "You are not a teenager!"
  }

}

function ageChecker(age) {
  if(age<=12)
  {
    return "You are kid"
  }
  else if(age>=13 && age<=19)
  {
    return "You are a teenager!"
  }
  else {
    {
      return "You are not a teenager!"
    }
  }

}

function ternaryTeenager(age) {
  (age>=13 && age<=19)?"You are a Teenager!":"You are not a Teenager!"

}

function switchAge(age) {
  var me="You are a Teenager!"
  switch(age)
  {
    case 13:return me
    break;
    case 14:return me
    break;
    case 15:return me
    break;
    case 16:return me
    break;
    case 17:return me
    break;
    case 18:return me
    break;
    case 19:return me
    break;
    default:return "you are age"
    
  }

}
