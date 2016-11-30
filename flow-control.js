

function basicTeenager(age) { var age;
    if (age >=13 && age <=19) { console.log(`You are a teenager!`); }

  } else {
    return undefined
  } // only an if statement basicTeenager('18')
basicTeenager('14')
basicTeenager('21')
function teenager(age) { var age = '0'
  if ((age >= 13 && age <= 19)) { console.log(`"You are a teenager!"`);
         } else {
           console.log(`"You are a not teenager"`);
         }}
}

teenager('18'); teenager('11');
function ageChecker(age) { var age = '0'
  if ((age >= 13 && age <= 19)) { console.log(`"You are a teenager!"`);
           } else if (age <=12){ console.log(`You are a kid`);
           } else (age >=20){ return `You are a grownup`
           }}
  ageChecker('18'); ageChecker('12'); ageChecker('22');
}

function ternaryTeenager(age) { var age = '0'
  return ((age >= 13 && age <= 19)) ?  console.log(`"You are a teenager!"`) :  console.log(`"You are not a teenager!"`)
}
ternaryTeenager('18')

function switchAge(age) {
    var age = '0'
    var myswitch = age
    case "13":
      console.log(`"You are a teenager!"`)
      break;
    case "14":
      console.log(`"You are a teenager!"`)
      break;
    case "15":
      console.log(`"You are a teenager!"`)
      break;
    case "16":
      console.log(`"You are a teenager!"`)
      break;
    case "17":
      console.log(`"You are a teenager!"`)
      break;
    case "18":
      console.log(`"You are a teenager!"`)
      break;
    case "19":
      console.log(`"You are a teenager!"`)
      break;
    default:  console.log(`"You are not a teenager!"`)
  }
}
switchAge('19'); switchAge('22');
