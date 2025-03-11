async function fetchCensusData() {
    const url = 'https://api.census.gov/data/2020/dec/pl?get=NAME&for=place:*&in=state:*';
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      // You can now process the data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function
  fetchCensusData();
  