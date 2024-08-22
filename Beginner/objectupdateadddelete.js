//Program for object add, update and delete
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  //updating
  spaceship['color'] = 'glorious gold';

  //adding
  spaceship['numEngines'] = 7;

  //
  delete spaceship['Secret Mission'];
  
  console.log(spaceship);