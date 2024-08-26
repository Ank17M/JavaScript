let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  //Creating function to change  
  const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  //Creating function to remotely disable spaceship 
  const remotelyDisable = obj => {
    obj['disabled'] = true;
  };
  
  //Calling the object for testing
  console.log(spaceship);
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);