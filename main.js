function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classiffier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pgdSzumwr/model.json",modelReady);
}
function modelReady(){
    classiffier.classify(gotResults);
}
dog=0;
cat=0;
function gotResults(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    rgb_r=Math.floor(Math.random()*255)+1;
    rgb_g=Math.floor(Math.random()*255)+1;
    rgb_b=Math.floor(Math.random()*255)+1;
    console.log(rgb_b,rgb_g,rgb_r);
    document.getElementById("dogdetect").innerHTML="Dog detected - "+dog;
    document.getElementById("catdetect").innerHTML="cat detected - "+cat;
    document.getElementById("result-label").innerHTML="I Can Hear - "+results[0].label;
    document.getElementById("result-label").style.color="rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
    document.getElementById("dogdetect").style.color="rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
    document.getElementById("catdetect").style.color="rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
    img=document.getElementById("img-all");
    if (results[0].label=="dog"){
img.src="dog.gif";
dog=dog+1;
document.getElementById("dogdetect").innerHTML="Dog detected - "+dog;
    document.getElementById("catdetect").innerHTML="cat detected - "+cat;
    }
    else if(results[0].label=="meow"){
        img.src="cat.gif";
        cat=cat+1;
        document.getElementById("dogdetect").innerHTML="Dog detected - "+dog;
    document.getElementById("catdetect").innerHTML="cat detected - "+cat;
    }
    else{
        img.src="1stimg.png";
        document.getElementById("dogdetect").innerHTML="Dog detected - "+dog;
        document.getElementById("catdetect").innerHTML="cat detected - "+cat;
    }
}
}