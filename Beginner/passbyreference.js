let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  //Creating function to change fuel type
  const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  //Creating function to remotely disable spaceship 
  const remotelyDisable = obj => {
    obj['disabled'] = true;
  };
  
  //Calling the function greenEnergy for testing
  console.log(spaceship);
  greenEnergy(spaceship);
  
  //Calling the function remotelyDisable for testing
  remotelyDisable(spaceship);
  console.log(spaceship);