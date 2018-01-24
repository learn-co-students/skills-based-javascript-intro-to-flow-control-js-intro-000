function basicTeenager(age) {

  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  answer = "You are not a teenager";

  if (age > 12 && age < 20) {
    answer = "You are a teenager!"
  }

  return answer;
}

function ageChecker(age) {
  answer = "You are a kid";

  if (age > 12 && age < 20) {
    answer = "You are a teenager!"
  } else if (age > 19) {
    answer = "You are a grownup"
  }

  return answer;
}

function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? "You are a teenager" : "You are not a teenager" ;
}

function switchAge(age) {
  var answer;

  switch(age) {
    case 13:
      answer = "You are a teenager";
      break;
    case 14:
      answer = "You are a teenager";
      break;
    case 15:
        answer = "You are a teenager";
        break;
    case 16:
        answer = "You are a teenager";
        break;
    case 17:
        answer = "You are a teenager";
        break;
    case 18:
        answer = "You are a teenager";
        break;
    case 19:
        answer = "You are a teenager";
        break;
    default:
        answer = "You have an age";
        break;
  }

  return answer;
}
