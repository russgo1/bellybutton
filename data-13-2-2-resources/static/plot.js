// 13.2.2
// verify that the data is correctly read in
console.log(cityGrowths);

// sort the cities (objects in cityGrowts array) in descneding order by
// by population growth - key = "Increase_from_2016"
var sortedCities = cityGrowths.sort((a,b) => 
a.Increase_from_2016 - b.Increase_from_2016).reverse();
// calling reverse function at end puts list in descending order

// select only top 5 cities
var topFiveCities = sortedCities.slice(0, 5);
// create two new arrays
// one of city names, and the other of corresponding population growths
// These arrays will be the x and y axis data of the Plotly chart.
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
// parseInt explicitly coverts a string to an integer

// Create bar chart using Plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City Names"},
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);

// Skill drill
// Use same data to make a bar plot for 7 largest cities by population

