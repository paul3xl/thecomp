// var slider_hp = document.querySelector ('.slider-img');
// var hp = ['hp4.jpg', 'hp3.png', 'hppav.png' ];
// var i = 0;
// function prev(){
//     if(i <= 0) i =hp.length;
//     i--;
//     return setHp();
// }
// function Next(){
//     if (i >= hp.length - 1) i = -1;
//     i++;
//     return setHp();
// }
// function setHp(){
//     return slider_hp.setAttribute('src', 'hp/' + hp[i]);
// }
///////////////////////////////HP LAPTOPS///////////////////
// let slider_hd = document.querySelector  ('.wider-ho');
// let hd = ['hppro455L.jpg', 'hppor455r.jpg', 'hppor455C.jpg', 'hppro455rCC.jpg'];
// let i = 0;
// function hprev(){
//     if (i <= 0) i =hd.length;
//     i--;
//     return setHd();
// }
// function hnext(){
//     if (i >= hd.length -1)i = -1;
//     i++;
//     return setHd();
// }
// function setHd(){
//     return slider_hd.setAttribute('src', 'hp/' + hd[i]);
// }
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

document.querySelector('.brand').onclick = function () {
  document.querySelector('.brands').style.display = 'inline-flex'
}
document.querySelector('.fa-window-close').onclick = function () {
  document.querySelector('.brands').style.display = 'none'
}













// document.querySelector('.btnsee').onclick = function(){
    // document.querySelector('.btnsee').style.display = 'none'
    // document.querySelector('.btnles').style.display = 'block'
    // document.querySelector('.hplapsdisp').style.height = '470vh'
    // document.querySelector('.hpparent2').style.display = 'inline-flex'
    // document.querySelector('.hpparent3').style.display = 'inline-flex'
    // document.querySelector('.hpparent4').style.display = 'inline-flex'
    // document.querySelector('.hpparent5').style.display = 'inline-flex'
// }
// document.querySelector('.btnles').onclick = function(){
//     document.querySelector('.btnsee').style.display = 'block'
//     document.querySelector('.btnles').style.display = 'none'
//     document.querySelector('.hplapsdisp').style.height = '130vh'
//     document.querySelector('.hpparent3').style.display = 'none'
//     document.querySelector('.hpparent2').style.display = 'none'
//     document.querySelector('.hpparent4').style.display = 'none'
//     document.querySelector('.hpparent5').style.display = 'none'
// }