var i =0;
var images = []; //array
var time = 2000 // Time 

// IMAGES

images[0] = "url(./images/3)"



// function

function changeImage () {
    'var'el = document.getElementById('main');
    el.style.backgroundImage = images[i];
    if(i< images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', time);
}

window.onload = changeImage;

