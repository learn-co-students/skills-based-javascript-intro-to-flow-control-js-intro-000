function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}
function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}
function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}
function ternaryTeenager(age) {
   return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
 }

function switchAge(age) {
  switch(age) {
    case 13 :
    return "You are a teenager";
    break;
    case 14 :
    return "You are a teenager";
    break;
    case 15 :
    return"You are a teenager";
    break;
    case 16 :
    return"You are a teenager";
    break;
    case 17 :
    return "You are a teenager";
    break;
    case 18 :
    return "You are a teenager";
    break;
    case 19 :
    return"You are a teenager";
    break;
    default:
    return "You have an age";
  }
}
/* And here are the errors:
1) flow-control switchAge should return "You are a teenager" if age is between 13-19:
   Error: Expected undefined to equal 'You are a teenager'
    at assert (node_modules/expect/lib/assert.js:29:9)
    at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
    at Context.it (test/flow-control-test.js:72:29)
2) flow-control switchAge should return "You have an age" if age not between 13-19:
   Error: Expected undefined to equal 'You have an age'
    at assert (node_modules/expect/lib/assert.js:29:9)
    at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
    at Context.it (test/flow-control-test.js:76:29)*/
