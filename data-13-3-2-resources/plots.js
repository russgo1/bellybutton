// 13.3.2
// importing from external, local JSON file

d3.json("samples.json").then(function(data){
    console.log(data);
});
// To load the page, navigate to the directory where samples.json and index.html, as well as the script file, plots.js, are located. 
// Open the command line (Terminal or Git Bash) and type the following:
// python -m http.server
// Navigate to the given port number in your browser: localhost:8000

//Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).
d3.json("samples.json").then(function(data) {
    var person1 = Object.entries(data.metadata[0]);
    person1.forEach(([key, value]) => console.log(`${key}: ${value}`))
});