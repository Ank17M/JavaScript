//Creating Getter function

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if(typeof(this._energyLevel) === 'number'){
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  // Calling robot to test if it is working correctly below!!!
  console.log(robot.energyLevel);