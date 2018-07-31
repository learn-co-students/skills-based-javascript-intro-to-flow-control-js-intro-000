function basicTeenager(age) {
  if (age>=13 && age<=19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age>=13 && age<=19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age>=13 && age<=19) {
    return "You are a teenager!";
  } else if(age<=12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return (age>=13 && age<=19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}



// 7) flow-control ternaryTeenager should return "You are a teenager" if age is between 13-19:
//   Error: Expected undefined to equal 'You are a teenager'
//     at assert (node_modules/expect/lib/assert.js:29:9)
//     at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//     at Context.it (test/flow-control-test.js:62:35)

// 8) flow-control ternaryTeenager should return "You are not a teenager" if agenot between 13-19:
//   Error: Expected undefined to equal 'You are not a teenager'
//     at assert (node_modules/expect/lib/assert.js:29:9)
//     at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//     at Context.it (test/flow-control-test.js:66:35)

// 9) flow-control switchAge should return "You are a teenager" if age is between 13-19:
//   Error: Expected undefined to equal 'You are a teenager'
//     at assert (node_modules/expect/lib/assert.js:29:9)
//     at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//     at Context.it (test/flow-control-test.js:72:29)

// 10) flow-control switchAge should return "You have an age" if age not between13-19:
//   Error: Expected undefined to equal 'You have an age'
//     at assert (node_modules/expect/lib/assert.js:29:9)
//     at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//     at Context.it (test/flow-control-test.js:76:29)