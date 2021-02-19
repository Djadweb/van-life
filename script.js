
var bottom = document.querySelector('.bottom');
var van = document.querySelector('.van');

const car_image = ['./assets/Img_05.png','./assets/Img_06.png'];

document.addEventListener('keypress', function(e) {    
    if(e.keyCode==13) {
        bottom.classList.toggle('moveForward');
        van.classList.toggle('suspension');
    }
});

var light = false;

document.addEventListener('keypress', function(e) {        
    if(e.keyCode==32) {
        if(light) {
            light=false;
            van.src = car_image[1];            
        }else {
            light=true;
            van.src = car_image[0];            
        }
    }
    
});