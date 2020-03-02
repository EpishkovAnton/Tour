$(document).ready(function(){
    $('.slider').slick({
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false, 
        infinite: true,
      });     
  });  
      
$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('.body').toggleClass('.lock');
      });
 
});

$(document).ready(function(){
  $('.slider-two').slick({
      easing: 'ease',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 1000,
      centerMode: false,
      fade: true




    });     
}); 