var slider_img = document.querySelector ('.slider-img');
var img = [ 'hp3.png', 'hp4.png', 'hp5.png'];
var i = 0;

function prev(){
    if(i <= 0) i =img.length;
    i--;
    return setImg();
}

function Next(){
    if (i >= img.length - 1) i = -1;
    i++;
    return setImg();
}


function setImg(){
    return slider_img.setAttribute('src', 'img/' + img[i]);
}

document.querySelector('.btnsee').onclick = function(){
    document.querySelector('.btnsee').style.display = 'none'
    document.querySelector('.btnles').style.display = 'block'
    document.querySelector('.hplapsdisp').style.height = '470vh'
    document.querySelector('.hpparent2').style.display = 'inline-flex'
    document.querySelector('.hpparent3').style.display = 'inline-flex'
    document.querySelector('.hpparent4').style.display = 'inline-flex'
    document.querySelector('.hpparent5').style.display = 'inline-flex'
}
document.querySelector('.btnles').onclick = function(){
    document.querySelector('.btnsee').style.display = 'block'
    document.querySelector('.btnles').style.display = 'none'
    document.querySelector('.hplapsdisp').style.height = '130vh'
    document.querySelector('.hpparent3').style.display = 'none'
    document.querySelector('.hpparent2').style.display = 'none'
    document.querySelector('.hpparent4').style.display = 'none'
    document.querySelector('.hpparent5').style.display = 'none'
}