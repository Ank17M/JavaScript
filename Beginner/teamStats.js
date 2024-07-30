const team = {
    _players: [{
      firstName: 'Ankit',
      lastName: 'Mourya',
      age: 22
    },
    {
      firstName: 'Badal',
      lastName: 'Kushwaha',
      age: 23
    },
    {
      firstName: 'Aniket',
      lastName: 'Chauhan',
      age: 23
    }],
    _games: [{
      opponent: 'random1',
      teamPoints: 11,
      opponentPoints: 11
    },
    {
      opponent: 'random2',
      teamPoints: 12,
      opponentPoints: 12
    },
    {
      opponent: 'random3',
      teamPoints: 13,
      opponentPoints: 13
    }],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newfirstName, newLastName, newAge){
      const player = {
      firstName: newfirstName,
      lastName: newLastName,
      age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  //
  console.log(team.players);
  console.log(team.games);