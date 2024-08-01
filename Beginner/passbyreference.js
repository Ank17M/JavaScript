let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your
  const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  const remotelyDisable = obj => {
    obj['disabled'] = true;
  };
  
  //Test
  console.log(spaceship);
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);