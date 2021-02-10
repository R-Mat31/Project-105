Webcam.set({
 width : 400,
 height : 400,
 image_format : 'png',
 png_quality : 90
});
var camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_selfie(){
 Webcam.snap(function(dataUri){
 document.getElementById("result").innerHTML = "<img id = 'selfie' src = " + dataUri + ">";
 });
}
var recogniser = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/70XNkp0i3/model.json", modelLoaded);
function modelLoaded(){
 console.log(modelLoaded);
}
function identify_person(){
 img = document.getElementById("capturedImage");
 recogniser.classify(img, gotResult);
}
function gotResult(error, results){
 if(error){
  console.error(error);
 }
 else{
  console.log(results);
  document.getElementById("name").innerHTML = results[0].label;
  document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
 }
}