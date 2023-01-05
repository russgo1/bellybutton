function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
    });
};
  
init();

function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
};

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        console.log(result)
        var allResults = Object.entries(result) //skill drill
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        //PANEL.append("h6").text(allResults[0]) // incorported in below forEach function
        // Skill drill begins here
        allResults.forEach(field => PANEL.append("h6").text(`${field[0]}: ${field[1]}`))
    });
};