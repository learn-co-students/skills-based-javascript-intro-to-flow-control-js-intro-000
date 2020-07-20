function basicTeenager(age) {
if (age <=19 && age >=13) {
  return "You are a teenager!" }
}

function teenager(age) {
  if (age <=19 && age >=13) {
    return "You are a teenager!"
  } else if (age >19 || age <13) {
      return "You are not a teenager" }
}

function ageChecker(age) {
  if (age <=19 && age >=13) {
    return "You are a teenager!"
  } else if (age >19) {
    return "You are a grownup"
  } else if (age <13) {
    return "You are a kid" }
}

function ternaryTeenager(age) {
return (age <=19 && age >=13) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
switch (age)
age "13": {
return ("You are a teenager"); }
break;
age "14": {
return ("You are a teenager"); }
break;
age "15": {
return ("You are a teenager"); }
break;
age "16": {
return ("You are a teenager"); }
break;
age "17": {
return ("You are a teenager"); }
break;
age "18": {
return ("You are a teenager"); }
break;
age "19": {
return ("You are a teenager"); }
break;
default: {
return ("You have an age"); }
}
