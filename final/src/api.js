const BASE_URL = 'http://localhost:8000/game';

module.exports = {
   
  getWinners(success){
    fetch(`${BASE_URL}/winners/`)
      .then(response => response.json())
      .then(success)
  }
,


  addWinner(data, success){
    fetch(`${BASE_URL}/winners/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  }
}