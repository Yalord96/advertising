window.onload =  function(){
    console.log("страница обновлена");
}
let delClass = ()=>{
    document.getElementById("on1").classList.remove("onload");
    document.getElementById("on2").classList.remove("onload");
    document.getElementById("on3").classList.remove("onload");
    document.getElementById("on4").classList.remove("onload");
    document.getElementById("on5").classList.remove("onload");
    document.getElementById("on6").classList.remove("onload");
    console.log("удаление...")
}
setTimeout( delClass,3000);
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
document.getElementById("plusSlide").addEventListener( "click", plusSlide );
function plusSlide() {
    showSlides(slideIndex += 1);
};

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
document.getElementById("minusSlide").addEventListener( "click", minusSlide );
function minusSlide() {
    showSlides(slideIndex -= 1);
};

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
let autoSlide = ()=>{
    setInterval(plusSlide, 4000);
 }
 autoSlide();
