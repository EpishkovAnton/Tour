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
  $('.gallery__slider').slick({
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true, 
      infinite: true,
    });     
}); 