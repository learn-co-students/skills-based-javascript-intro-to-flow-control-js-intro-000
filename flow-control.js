function basicTeenager(age) {
    if (age >= 13 && age <= 19) {
      return 'You are a teenager!';
    }
}
function teenager(age) {
  if(age >= 13 && age <= 19) {
    return 'You are a teenager!'
  } else{
    return 'You are not a teenager'
  }
} console.log(teenager(15));


function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return 'You are a teenager!';
  } else if( age <=12) {
    return 'You are a kid';
  } else {
    return 'You are a grownup';
  }
} console.log(ageChecker(15));



function ternaryTeenager(age) {

  return  age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager';
}
console.log(ternaryTeenager(16));

function switchAge(age) {



}
function switchAge(age) {
  var answer = "";
    switch(age) {
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      answer = "You are a teenager";
        break;
        default :
        answer = 'You have an age';
  }
return answer;
} switchAge(20)
