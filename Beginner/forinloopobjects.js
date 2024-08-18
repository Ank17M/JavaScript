//Program for 'forinloop'
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

//Calling "forinloop"
for(let crewMember in spaceship.crew){
  console.log(`${crewMember} : ${spaceship.crew[crewMember].name}`);
}
//Calling "'forinloop'"
for(let crewMember in spaceship.crew){
  console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`);
}