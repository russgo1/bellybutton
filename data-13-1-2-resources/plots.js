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