//*var age = 17;
function basicTeenager(age) {
  //if (13 < age < 19)
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  }
    else
      return

}

var basicTeenager = function (age){
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  }
  else
    return
}

var teenager = function (age){
  if (age >= 13 && age <= 19){
    return 'You are a teenager!'
  }
  else
    return 'You are not a teenager'
}


var ageChecker = function (age){
  if (age >= 13 && age <= 19){
      return 'You are a teenager!'
  } else if (age <= 12){
      return 'You are a kid'
  } else {
      return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <=19) ? 'You are a teenager':'You are not a teenager'
}

var switchAge = function (age){
  switch (age){
    case '13':
      console.log ('You are a teenager');
      break;
    case '14':
      console.log('You are a teenager');
      break;
    case '15':
      console.log('You are a teenager');
      break;
    case '16':
      console.log('You are a teenager');
      break;
    case '17':
      console.log('You are a teenager');
      break;
    case '18':
      console.log('You are a teenager');
      break;
    case '19':
      console.log('You are a teenager');
      break;
    default:
      return 'You have an age';
    }
}
