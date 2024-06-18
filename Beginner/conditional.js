let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false;
let runAge = 18;

if(runAge > 18 && regEarly === true){
  raceNumber += 1000;
}

if(runAge > 18 && regEarly === true){
  console.log(`${raceNumber} your race starts at 9:30 AM.`);
} else if(runAge > 18 && regEarly === false){
  console.log(`${raceNumber} your race starts at 11:00 AM.`);
} else if(runAge < 18){
  console.log(`${raceNumber} your race starts at 12:30 PM.`);
} else{
  console.log('See the registration desk');
}