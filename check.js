fetch('check.json')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched JSON:', data);
    const jsonString = JSON.stringify(data);
    console.log('Converted JSON string:', jsonString);
  })
.catch(error => console.error('Fetch error:', error));
