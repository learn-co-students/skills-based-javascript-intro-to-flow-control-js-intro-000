'use strict';

function basicTeenager(age){
    if (age >= 13 && age <= 19) {
        return "You are a teenager!";
    } else {
        return undefined;
    }
}

function teenager(age){
    if (age >= 13 && age <= 19) {
        return "You are a teenager!";
    } else {
        return "You are not a teenager";
    }
}

function ageChecker(age){
    if (age >= 20) {
        return "You are a grownup";
    } else if (age >= 13 && age <= 19){
        return "You are a teenager!";
    } else if (age <= 12) {
        return "You are a kid";
    }
}

function ternaryTeenager(age){
    var answer;
    age >= 13 && age <= 19 ? (
        answer = "You are a teenager"
    ) : (
        answer = "You are not a teenager"
    );
    return answer;
}

function switchAge(age){
    switch (age) {
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
