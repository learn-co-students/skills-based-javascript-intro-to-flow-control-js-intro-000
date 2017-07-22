'use strict';
function basicTeenager(age) {
  if (age >= 13 && age <= 19)
  {return 'You are a teenager!'}

}
basicTeenager(17)

function teenager(age) {
  if (age >= 13 && age <= 19)
  {return 'You are a teenager!'}
  else
  {return 'You are not a teenager'}

}
teenager(21);
function ageChecker(age) {
  if (age >= 13 && age <= 19)
  { return 'You are a teenager!'}
  else if (age <= 12)
    {return 'You are a kid';
  }
  else {
    return 'You are a grownup'
  }

}

ageChecker(11);

function ternaryTeenager(age) { if (age >= 13 && age <= 19)
  { return 'You are a teenager'}
  else {return 'You are not a teenager'}
}

function switchAge(age) {if (age >= 13 && age <= 19)
  {return 'You are a teenager'}
else
{return "You have an age";}
}
