var i =0;
var images = []; //array
var time = 4000 // Time in millseconds

// IMAGES


images[0]="url(./Images/Italian.jpg)";
images[1]="url(./Images/Italian2.jpg)";
images[2]="url(./Images/italian3.jpg)";
images[3]="url(./Images/Italian4.jpg)";
images[4]="url(./Images/Italian5.jpg)";






// function

function changeImage () {
    var el = document.getElementById('main');
    el.style.backgroundImage = images[i];
    if(i<images.length-1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', time);
}

window.onload = changeImage
