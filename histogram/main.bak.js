let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "Taipei Zoo";
trace1.x = [];
trace1.y = [];

for (let i = 0; i < animals_Taipei_Zoo.length; i++) {
    trace1.x[i] = animals_Taipei_Zoo[i]['name'];
    trace1.y[i] = animals_Taipei_Zoo[i]['count'];
}

let trace2 = {};
trace2.type = "bar";
trace2.name = "Taoyuan Zoo";
trace2.x = [];
trace2.y = [];

for (let i = 0; i < animals_Taoyuan_Zoo.length; i++) {
    trace2.x[i] = animals_Taoyuan_Zoo[i]['name'];
    trace2.y[i] = animals_Taoyuan_Zoo[i]['count'];
}


let data = [];
data.push(trace1);
data.push(trace2);

let layout = {
    margin: {
        t: 0
    },
    barmode: 'stack'
};

Plotly.newPlot(myGraph, data, layout);