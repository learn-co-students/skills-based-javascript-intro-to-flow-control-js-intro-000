function basicTeenager(age)
  {

    if(age <= 19 && age >= 13 )                 // True Statement
      {  return "You are a teenager!"}

    //else if ( age > 19 || age < 13 )          // False Statement
      //  { return "You are not a teenager"}
    }

function teenager(age)
  {

    if(age <= 19 && age >= 13 )                 // True Statement
      {  return "You are a teenager!"}

    else if ( age > 19 || age < 13 )            // False Statement
      { return "You are not a teenager"}

  }

function ageChecker(age)
  {
    if(age <= 19 && age >= 13 )                 // True Statement
      {  return "You are a teenager!"}

    else if ( age <= 12)                       // False Statement 1  - kid
      { return "You are a kid"}

    else if ( age > 19 )                       // False Statement 2 - grown up
        { return "You are a grownup"}

  }

function ternaryTeenager(age)

  {
  return (age <= 19 && age >= 13 )
    ? "You are a teenager"
    : "You are not a teenager"
  }

function switchAge(age)
  {
    switch(age)
      {
        case 13 :
          return "You are a teenager"
        case 14 :
          return "You are a teenager"
        case 15 :
          return "You are a teenager"
        case 16 :
          return "You are a teenager"
        case 17 :
          return "You are a teenager"
        case 18 :
          return "You are a teenager"
        case 19 :
          return "You are a teenager"
      }

        if ( age > 19 || age < 13 )            // False Statement
          { return "You have an age"}
  }
