//Creating an object that adds two with two
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };

  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  //Testing function
  isTwoPlusTwo();
  
  console.log(isTwoPlusTwo.name);