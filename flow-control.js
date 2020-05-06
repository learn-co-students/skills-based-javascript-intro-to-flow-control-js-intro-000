// function basicTeenager(age) {
//   if (13 < age < 19) {
// 		return console.log('You are a teenager!');
// 	}
// }

// function teenager(age) {
//     if (13 < age < 19) {
// 			return console.log('You are a teenager!');
// 		} else {
// 			return console.log('You are not a teenager');
// 		}
 
// }

// function ageChecker(age) {
//  if (12 > age) {
// 		return console.log('You are a kid');
//  } else if (13 < age < 19) {
// 		console.log('You are a teenager!');
//  } else {
// 		return console.log('You are a grownup');
//  }
// }

// function ternaryTeenager(age) {
// 13 < age < 19
// 	? console.log('You are a teenager!')
// 	: console.log('You are not a teenager!');
// }

// function switchAge(age) {
//     switch (age) {
// 			case 13:
// 				return 'You are a teenager!';
// 				break;
// 			case 14:
// 				return 'You are a teenager!';
// 				break;
// 			case 15:
// 				return 'You are a teenager!';
// 				break;
// 			case 16:
// 				return 'You are a teenager!';
// 				break;
// 			case 17:
// 				return 'You are a teenager!';
// 				break;
// 			case 18:
// 				return 'You are a teenager!';
// 				break;
// 			case 19:
// 				return 'You are a teenager!';
//             break;
//         default: 
//             return "you have an age"
// 		}
// }
function basicTeenager(age) {
	if (age >= 13 && age <= 19) {
		return 'You are a teenager!';
	}
}

function teenager(age) {
	if (age >= 13 && age <= 19) {
		return 'You are a teenager!';
	} else {
		return 'You are not a teenager';
	}
}

function ageChecker(age) {
	if (age >= 13 && age <= 19) {
		return 'You are a teenager!';
	} else if (age < 13) {
		return 'You are a kid';
	} else {
		return 'You are a grownup';
	}
}

function ternaryTeenager(age) {
	return age >= 13 && age <= 19
		? 'You are a teenager'
		: 'You are not a teenager';
}

function switchAge(age) {
	switch (age) {
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			return 'You are a teenager';
		default:
			return 'You have an age';
	}
}