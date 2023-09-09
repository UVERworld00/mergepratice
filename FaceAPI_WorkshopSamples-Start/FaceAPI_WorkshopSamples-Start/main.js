$(document).ready(function(){
    //do something
    $("#thisButton").click(function(){
        processImage();
    });
});

function processImage() {
    
    var thisImageSrc = $("#inputImage")[0].value;
    var thisImage = new Image();
    thisImage.src = thisImageSrc;
    
    var thisCanvasCTX = $("#myCanvas")[0].getContext("2d");
    thisImage.onload = function(){
        thisCanvasCTX.canvas.width = thisImage.width;
        thisCanvasCTX.canvas.height = thisImage.height;
        //TO-DO 1: 將圖片繪製在Canvas上
        
        //TO-DO 2: 畫一個框
        //設定方框的顏色
        
        //設定方框的粗細
        
        //畫上方框
        
        //TO-DO 3: 申請Azure Face API服務，在key.js填上金鑰
        //TO-DO 4: 呼叫Azure Face API服務
        
        
    };
    
};

function findFaces(thisCanvasCTX,thisImageSrc){
    //確認區域與所選擇的相同
    var uriBase = "https://southcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
    var params = {};
    //送出分析
    $.ajax({
        url: uriBase + "?" + $.param(params),
        // Request header
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        // Request body
        data: '{"url": ' + '"' + thisImageSrc + '"}',
    })
    .done(function(data) {        
        var thisImage = new Image();
        thisImage.src = thisImageSrc;

        for(var x=0; x<data.length;x++){
            var thisFaceRect = data[x].faceRectangle;
            thisCanvasCTX.strokeStyle="blue";
            thisCanvasCTX.strokeRect(thisFaceRect.left,thisFaceRect.top,thisFaceRect.width,thisFaceRect.height);
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        //丟出錯誤訊息
        alert(JSON.stringify(jqXHR.responseJSON.error));
    });
}