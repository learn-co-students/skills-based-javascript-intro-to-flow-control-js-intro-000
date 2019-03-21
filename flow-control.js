function basicTeenager(age) {if (age>=13 && age<=19)
    return "You are a teenager!"

}

function teenager(age) {if (age>=13 && age<=19)
    {return "You are a teenager!"}
    return "You are not a teenager"

}

function ageChecker(age) {if (age>=13 && age<=19)
  {return "You are a teenager!"}
  else if (age<13)
  {return "You are a kid"}
  else
  {return "You are a grownup"}

}

function ternaryTeenager(age) {return (age>=13 && age<=19) ?
    "You are a teenager":"You are not a teenager"

}
var phrase = "You are a teenager";
function switchAge(age) {switch (age) {
    case 13: return phrase; break;
    case 14: return phrase; break;
    case 15: return phrase; break;
    case 16: return phrase; break;
    case 17: return phrase; break;
    case 18: return phrase; break;
    case 19: return phrase; break;
    default: return "You have an age"}}
