

export const getWinners = () => (
    fetch(
      'http://localhost:8000/game/winners/',
      {
        method: 'GET',
      }
    )
  )
  
