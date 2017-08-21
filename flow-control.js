function basicTeenager(age) {
if(age >= 13 && age <= 19){
  var teenager = "You are a teenager!"
  return teenager;
	}
};

function teenager(age) {
	if(age >= 13 && age <= 19){
 	 var areTeenager = "You are a teenager!";
  	 return areTeenager;
	}else{
    return "You are not a teenager";
  }

};

function ageChecker(age) {
  if(age >= 13 && age <= 19){
    var teenager = "You are a teenager!"
    return teenager;
  } else if(age <= 12){
    return "You are a kid";
  }else{
    return "You are a grownup";
  }

};

function ternaryTeenager(age) {
  if(age >= 13 && age <= 19){
    var teenager = "You are a teenager"
    return teenager;
  }else if(age <= 12 || age >= 20){
    var notTeenager ="You are not a teenager";
	return notTeenager;
  }

};

function switchAge(age) {

switch(age){

    case 13:
	return "You are a teenager";
	break;

	case 14:
	return "You are a teenager";
	break;

	case 15:
	return "You are a teenager";
	break;

	case 16:
	return "You are a teenager";
	break;

	case 17:
	return "You are a teenager";
	break;

	case 18:
	return "You are a teenager";
	break;

	case 19:
	return "You are a teenager";
	break;

    default:
	return "You have an age";
}


};
