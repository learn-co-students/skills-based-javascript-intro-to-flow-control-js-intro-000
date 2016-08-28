'use strict';

function basicTeenager(age) {
	if (age >= 13 && age <= 19) {
		return 'You are a teenager!';
	}
	return undefined;
}

function teenager(age){
	if (age >= 13 && age <= 19) {
		return 'You are a teenager!';
	}
	return 'You are not a teenager!';
}

function ageChecker(age){
	if (age >= 13 && age <= 19) {
		return 'You are a teenager!';
	} else if (age < 13) {
		return "You are a kid";
	} else if (age >= 20) {
		return "You are a grownup";
	}
	return undefined;
}

function ternaryTeenager(age){

}

function switchAge(age){

}
