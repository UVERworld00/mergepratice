d3.csv(dataURL).then(
    getCSV_Data
);

function unpack(rows, key){
    // Element-Wised
    return rows.map(function(row){
        return row[key];
    });
}

function getCSV_Data(rows){
    console.log(rows);
    let trace1 = {};
    trace1.type = "choropleth";
    trace1.locationmode = "country names";
    trace1.locations = unpack(rows, 'location');
    trace1.z = unpack(rows, 'alcohol');
    trace1.text = unpack(rows, 'location');
    trace1.autocolorscale = true;

    trace1.locations.push('Taiwan');
    trace1.z.push(15);
    trace1.text.push('台灣');

    let data = [];
    data.push(trace1);


    let layout = {
        margin: {
            t: 50,
            l: 0
        },
        geo:{
            projection:{
                type:'robinson'
            }
        },
        title:"2010年各國成人純酒精消耗量"
    };

    Plotly.newPlot(myGraph, data, layout);
}
