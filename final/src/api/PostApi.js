
export const postWinner = () => (
    fetch(`${BASE_URL}/winners/`, {
        'method': 'POST',
        'body': JSON.stringify(data) 
      })
        .then(response => response.json())
        .then(success)
    
  )
  
