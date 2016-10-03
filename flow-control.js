function basicTeenager(age) {
  var retval;
  if (age >=13 && age <= 19 )  { retval="You are a teenager!"; }
   return retval;
}

function teenager(age) {
var retval="";
if (age >=13 && age <= 19 ) { retval="You are a teenager!"; }
else { retval = "You are not a teenager"; }
return retval;
}

function ageChecker(age) {
var retval="";
  if (age >=13 && age <= 19 ) { retval="You are a teenager!"; }
  else if (age <= 12)  { retval="You are a kid"; }
  else if (age>=20 )   {retval="You are a grownup";}
  return retval;
}

function ternaryTeenager(age) {
  var retval="";
  if (age >=13 && age <= 19 ) { retval="You are a teenager"; }
  else { retval = "You are not a teenager"; }
  return retval;
}

function switchAge(age) {
  var retval="";
 if (age >=13 && age <= 19 ) { retval="You are a teenager"; }
 else {retval = "You have an age";}
 return `${retval}`;

}
