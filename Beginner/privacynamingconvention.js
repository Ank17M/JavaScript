//Creating robot object with Energy-Level and  Recharge function
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  //Calling recharge function for testing
  robot.recharge();
  
  