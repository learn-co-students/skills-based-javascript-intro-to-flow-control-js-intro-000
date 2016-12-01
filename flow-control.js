function basicTeenager(age) {
if ((age >=13 && age <=19)) { return `You are a teenager!`; } // only an if statement basicTeenager('18')
}
 basicTeenager('18'); basicTeenager('11');
function teenager(age) {
  if (age >= 13 && age <= 19) { return `You are a teenager!`;} else { return `You are not a teenager`; }
}
teenager('18'); teenager('11');
function ageChecker(age) {
   if (age >= 13 && age <= 19) { return `You are a teenager!`;} else if (age <=12){ return `You are a kid`;} else { return `You are a grownup`;}
}
ageChecker('18'); ageChecker('11')
function ternaryTeenager(age) {
   return (age >= 13 && age <= 19) ? `You are a teenager` : `You are not a teenager` // only use one return operator!!
}
ternaryTeenager('18'); ternaryTeenager('11');
function switchAge(age) {
 switch(age) { case "13": return `You are a teenager`; case "14": return `You are a teenager`; case "15": return `You are a teenager`; case "16": return `You are a teenager`; case "17": return `You are a teenager`; case "18": return `You are a teenager`; case "19": return `You are a teenager`; default: return `You have an age`; break};
}
switchAge('13'); switchAge('14');switchAge('15'); switchAge('16');switchAge('17'); switchAge('18');switchAge('19'); switchAge('20')
//  switchAge('20') should return the default answer but this Learn system sees somthing else.
