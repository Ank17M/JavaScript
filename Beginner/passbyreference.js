let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  const remotelyDisable = obj => {
    obj['disabled'] = true;
  };
  
  //Calling the object
  console.log(spaceship);
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);