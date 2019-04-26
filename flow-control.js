
function basicTeenager()
{
  var age = 13
  if( 13 <= age <= 19 )
  {
    return "You are a teenager!"
  }
}



function teenager(age)
{
  if( 13 <= age <= 19 )
  {
    return "You are a teenager!"
  }
  else
  {
      return "You are not a teenager"
  }
}
teenager(20)
teenager(17)


function ageChecker(age)
{
if( 13 <= age <= 19 )
{
  return "You are a teenager!"
}
else if ( age <= 12 )
{
return "You are a kid"
}
else
{
return "You are grownup"
}
}
ageChecker(30)
ageChecker(10)
ageChecker(14)



function ternaryTeenager(age)
{
return 13<=age<=19 ?  "You are a teenager!" : "You are not a teenager"
}
 ternaryTeenager(60)
 ternaryTeenager(18)



function switchAge(age)
{
switch (age)
{
  case '13':
    return "You are a teenager"
    break;
    case '14':
      return "You are a teenager"
      break;
      case '15':
        return "You are a teenager"
        break;
        case '16':
          return "You are a teenager"
          break;
          case '17':
            return "You are a teenager"
            break;
            case '18':
              return "You are a teenager"
              break;
  default:
    return "You have an age"
}
}
switchAge(40)
switchAge(16)
