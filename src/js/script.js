$(document).ready(function () {
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

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

});

$(document).ready(function () {
  $('.slider-two').slick({
    easing: 'ease',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: false,
    fade: true,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]

  });

});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });


};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

$('[data-modal="consultation"]').on('click', function () {
  $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function () {
  $('.overlay').fadeOut();
});

$('.deep').on('click', function () {
  $('.overlayinfo').fadeIn();
});

$('.overlayinfo__close').on('click', function () {
  $('.overlayinfo').fadeOut();
});

$('.deepone').on('click', function () {
  $('.overlayinfoone').fadeIn();
});

$('.overlayinfoone__close').on('click', function () {
  $('.overlayinfoone').fadeOut();
});



$('.button_mini').each(function (i) {
  $(this).on('click', function () {
    $('#order .modal__descr').text($('.catalog-item__subtittle').eq(i).text())
    $('.overlay, #order').fadeIn();
  })

});