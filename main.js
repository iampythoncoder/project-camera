Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality
});

camera = dpcument.getElementById("camera");

Webcam.attach ('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_url)  {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="'+data_url+"/>";
    });
}

console.log('m15 version:', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/DbwLh90Is/',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_iamge');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)  {
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        document,getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
}