// 13.3.1
// make an api call

const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));
// places an API call to the URL and executes subsequent 
// lines of code only when the API call is complete
// The d3.json().then() method ensures that the data is received 
// before executing the arrow function

// Also from Lesson:
// Using a promise with the then() method ensures that all the data requested 
// from the API is received before executing the next part of code.

// retrieve the full name of Vandenburg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
d3.json(url).then(stations => stations.map(station => 
    console.log(`lat: ${station.location.latitude} : lon: ${station.location.longitude}`)
));
