function basicTeenager(age) {
if (13<=age && 19>=age) {
    return "You are a teenager!"
}
}
basicTeenager(16);
function teenager(age) {
    if (13<=age && 19>=age) {
        return "You are a teenager!"
    }else {
      return "You are not a teenager"
    }
}
teenager(23);
function ageChecker(age) {
    if (13<=age && 19>=age) {
        return "You are a teenager!"
    }else if (12>=age) {
      return "You are a kid"
    }else {
      return "You are a grownup"
    }
}
ageChecker(16);
function ternaryTeenager(age) {
return(13<=age && 19>=age) ? "You are a teenager" : "You are not a teenager"
}
ternaryTeenager(16);
function switchAge(age) {
switch(age) {
     case 13:
        return "You are a teenager";

    case 14:
        return "You are a teenager";

    case 15:
        return "You are a teenager";

    case 16:
        return "You are a teenager";

    case 17:
        return "You are a teenager";

    case 18:
        return "You are a teenager";

    case 19:
        return "You are a teenager";

       default:
       return "You have an age";
    }
}
switchAge(18);
