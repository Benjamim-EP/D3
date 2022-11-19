import bar from '../bar1.js';


let container = d3.select('.chart-container');
let barChart = bar();
let dataset = await d3.csv("data.csv")

barChart
    .width(300)
    .height(200)
    .margin({
            left: 50,
            bottom: 30
            })
            .on('customMouseOver', function(event, data) {
                console.log('data', data);
            });
            
console.log
container.datum(dataset).call(barChart);