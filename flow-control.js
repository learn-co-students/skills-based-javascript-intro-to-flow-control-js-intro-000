function basicTeenager(age) {
if(13<=age && age<=19){
  return 'You are a teenager!'
}
}

function teenager(age) {
  if(13<=age && age<=19){
    return 'You are a teenager!'
  } else{
    return 'You are not a teenager'
  }

}

function ageChecker(age) {
  if(13<=age && age<=19){
    return 'You are a teenager!'
  } else if(age<=12){
    return 'You are a kid'
  } else{
    return 'You are a grownup'
  }
}



function ternaryTeenager(age) {
  if(13<=age && age<=19){
    return 'You are a teenager'
  }
    return 'You are not a teenager'

}

function switchAge(age) {
  if(13<=age && age<=19){
    return 'You are a teenager'
  }else if(age<=13 || 19<=age){
    return 'You have an age'
  }
  }
