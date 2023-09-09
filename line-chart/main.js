let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "lines+markers";
trace1.type = "scatter";
trace1.name = "新北市";
trace1.marker = {
    size:10
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = "bottom center";
trace1.textfont = {
    family:"Raleway, sans-serif",
    size:10
};
trace1.visible = true;
trace1.line = {
    color: 'blue',
    shape: 'spline'
};

for(let i=0; i<set1.length; i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 = {};
trace2.mode = "lines+markers";
trace2.type = "scatter";
trace2.name = "台北市";
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.visible = false;
trace2.line = {
    color:'red',
    shape: 'spline'
};
trace2.marker = {
    size: 10
};

for (let i = 0; i < set2.length; i++) {
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.name = "桃園市";
trace3.marker = {
    size:10
};
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.visible = false;
trace3.line = {
    color:'green',
    shape:'spline'
};

for (let i = 0; i < set3.length; i++) {
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

let trace4 = {};
trace4.mode = "lines+markers";
trace4.type = "scatter";
trace4.name = "台中市";
trace4.marker = {
    size:10
};
trace4.x = [];
trace4.y = [];
trace4.text = [];
trace4.textposition = "bottom center";
trace4.textfont = {
    family:"Raleway, sans-serif",
    size:10
};
trace4.visible = true;
trace4.line = {
    color: 'orange',
    shape: 'spline'
};

for(let i=0; i<set1.length; i++){
    trace4.x[i] = set4[i][0];
    trace4.y[i] = set4[i][1];
    trace4.text[i] = set4[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);

let layout = {
    margin: {
        t: 50
    },
    xaxis:{
        // range:['2023/4','2023/5','2023/6','2023/7']
    },
    yaxis:{
        // range: [2000000,5000000]
    },
    title:'新北市/台北市/桃園市/台中市人口變化情形(2023/1-4)',
    updatemenus:[
        {
            y:1.2,
            x:0.1,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false,false]],
                    label:"新北市"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false,false]],
                    label: "台北市"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true,false]],
                    label: "桃園市"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false,true]],
                    label: "台中市"
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true,true]],
                    label: "Display All"
                }
            ]
        }
    ]
};

Plotly.newPlot(myGraph,data,layout);