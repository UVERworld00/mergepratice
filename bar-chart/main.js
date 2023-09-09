let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "男生";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "新北市";
trace1.x[1] = "台北市";
trace1.x[2] = "桃園市";
trace1.x[3] = "台中市";
trace1.y[0] = data_marriage.result.records[1].average_age;
trace1.y[1] = data_marriage.result.records[3].average_age;
trace1.y[2] = data_marriage.result.records[5].average_age;
trace1.y[3] = data_marriage.result.records[7].average_age;
trace1.text = trace1.y;
trace1.textfont = {
    color:'black',
    size:18
};
trace1.marker = {
    color:'yellow'
};

let trace2 = {};
trace2.type = "bar";
trace2.name = "女生";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "新北市";
trace2.x[1] = "台北市";
trace2.x[2] = "桃園市";
trace2.x[3] = "台中市";
trace1.text = trace1.y;
trace2.y[0] = data_marriage.result.records[2].average_age;
trace2.y[1] = data_marriage.result.records[4].average_age;
trace2.y[2] = data_marriage.result.records[6].average_age;
trace2.y[3] = data_marriage.result.records[8].average_age;
trace2.text = trace2.y;
trace2.textfont = {
    color: 'yellow',
    size: 18
};
trace2.marker = {
    color: 'green'
};

// let trace2 = {};
// trace2.type = "bar";
// trace2.name = "Tiger";
// trace2.x = [];
// trace2.y = [];
// trace2.x[0] = "Taipei Zoo";
// trace2.x[1] = "Taoyuan Zoo";
// trace2.y[0] = animals_Taipei_Zoo[1]['count'];
// trace2.y[1] = animals_Taoyuan_Zoo[1]['count'];
// trace2.text = trace2.y;
// trace2.textfont = {
//     color: 'yellow',
//     size: 20
// };
// trace2.marker = {
//     color: 'purple'
// };


// let trace3 = {};
// trace3.type = "bar";
// trace3.name = "Monkey";
// trace3.x = [];
// trace3.y = [];
// trace3.x[0] = "Taipei Zoo";
// trace3.x[1] = "Taoyuan Zoo";
// trace3.y[0] = animals_Taipei_Zoo[2]['count'];
// trace3.y[1] = animals_Taoyuan_Zoo[2]['count'];
// trace3.text = trace3.y;
// trace3.textfont = {
//     color: 'yellow',
//     size: 20
// };
// trace3.marker = {
//     color: 'green'
// };



let data = [];
data.push(trace1);
data.push(trace2);


let layout = {
    margin: {
        t: 50
    },
    barmode:'stack',
    title:'各縣市結婚年齡平均'
};

Plotly.newPlot(myGraph,data,layout);