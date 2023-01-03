// 13.1.2
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotArea1", [{x: [1, 2, 3, 4], y: [5, 6, 32, 12]}])

Plotly.newPlot("plotArea2", [{x: [5, 10, 15, 20], y: [2, 0, -2, -4]}])
// 13.1.3
// Bar chart with labels
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea3", [trace], layout)
var trace2 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}
var layout2 = {
    title: "Drink Orders",
    xaxis: {title: "Drink"},
    yaxis: {title: "Proportion of Orders"}
}
Plotly.newPlot("plotArea4", [trace2], layout2)
// 13.1.4
// Pie chart
var trace3 = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"};
var data = [trace3];
var layout3 = {
    title: "'Pie' Chart"
};
Plotly.newPlot("plotArea5", data, layout3);
// Scatter plot made from referencing Plotly documentation
// with color dimension
var trace4 = {
    y: [105.6, 106.1, 105.8, 105.7, 105.9, 106.2, 106.5, 106.01], 
    mode: "markers",
    marker: {
        size: 20,
        color: [20, 22, 24, 26, 28, 30, 32, 34]
    }
};
var data = [trace4]
var layout = {
    title: "Prices Scatter with Color Dimension"
};
Plotly.newPlot("plotArea6", data, layout);
// 13.2.1
// map method
var numbers = [0,2,4,6,8];
// add 5 to each number in array
var numbersPlus5 = numbers.map(num => num + 5);
console.log(`13.2.1 - numbersPlus5 = ${numbersPlus5}`);
// return value from one key in array of objects
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
// get city names
var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
// get city populations
var cityPop = cities.map(city => city.population);
console.log(cityPop)

// filter for words starting with "s"
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sWords = words.filter(function(word){
    return word.startsWith("s");
});
console.log(`Words that start with S: ${sWords}`);

// sort method
// ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
// descending order
var sortedAgeDesc = familyAge.sort((a,b) => b - a);
console.log(sortedAgeDesc)

// from class text:
// sortedAge returns the array [2,3,9,37,39]. Like map() and filter(), sort()takes in an anonymous function. 
// During each iteration, the anonymous function, an arrow function in this case, compares one element of the array (a) with another element in the array (b).
//  From a, it subtracts b. If the result is negative (i.e., b is larger than a) then it stays put. 
// If the result of the subtraction is positive, the order of the two elements is reversed.

// slice method
var integers = [0,1,2,3,4,5];
        // starting point, position where slicing ceases
var slice1 = integers.slice(0,2);
// get first three elements of array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var words3 = words.slice(0, 3);
console.log(words3);
// ommit second argumetn but include the comma to slice to the end of an array
var wordsLast2 = words.slice(3, );
console.log(wordsLast2);