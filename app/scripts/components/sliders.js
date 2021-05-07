import $ from 'jquery';
import 'slick-carousel';

export default () => {
  $('.main-section__slider').slick({
    slidesToShow: 1,
    fade: true,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: '<div class="main-section__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="main-section__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
        }
      },
      
    ]
  })

  $('.main-brands__list').slick({
    slidesToShow: 5,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: false,
    prevArrow: '<div class="main-brands__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="main-brands__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      }
    ]
  })

  $('.popular-products__slider').slick({
    slidesToShow: 3,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: false,
    prevArrow: $('.popular-products__navigation .prev-arrow').html('<div class="popular-products__arrow popular-products__prev-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>'),
    nextArrow: $('.popular-products__navigation .next-arrow').html('<div class="popular-products__arrow popular-products__next-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>'),
    rows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  })

  if ($('.popular-products__slider .product__item').length <= 3 ) {
    $('.popular-products__slider').addClass('no-slider');
    $('.popular-products__navigation').hide();
    $('.popular-products__slider').slick('unslick');
  }

  $('.main-inspiration__nav-list').slick({
    slidesToShow: 3,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<div class="main-brands__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="main-brands__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    asNavFor: '.main-inspiration__slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  })

  $('.main-inspiration__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-inspiration__nav-list',
    dots: false,
    fade: true,
    rows: 0
  })

  $('.main-inspiration__products').each(function eachSliders() {
    $(this).slick({
      slidesToShow: 1,
      fade: true,
      speed: 800,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      prevArrow: '<div class="popular-products__arrow popular-products__prev-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>',
      nextArrow: '<div class="popular-products__arrow popular-products__next-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>',
      rows: 0
    })
  })
  
  $('.main-advantages__list').slick({
    slidesToShow: 3,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: $('.main-advantages__navigation .prev-arrow').html('<div class="popular-products__arrow popular-products__prev-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#C4C4C4" stroke-width="1" fill-opacity="0" ></path></svg></div>'),
    nextArrow: $('.main-advantages__navigation .next-arrow').html('<div class="popular-products__arrow popular-products__next-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#C4C4C4" stroke-width="1" fill-opacity="0" ></path></svg></div>'),
    rows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  })

  $('.article__slider').slick({
    slidesToShow: 1,
    fade: true,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: '<div class="article__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="article__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false
        }
      },
    ]
  })

  $('.about-brands__slider').slick({
    slidesToShow: 5,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    infinite: true,
    dots: false,
    prevArrow: '<div class="article__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="article__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  $('.brands-section__slider').slick({
    slidesToShow: 1,
    fade: true,
    speed: 800,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: '<div class="main-section__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="main-section__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  })

  $('.popular-brands__slider').slick({
    slidesToShow: 3,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: true,
    prevArrow: '<div class="popular-products__arrow popular-products__prev-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>',
    nextArrow: '<div class="popular-products__arrow popular-products__next-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  })

  $('.collection-products__list').slick({
    slidesToShow: 5,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: false,
    prevArrow: '<div class="popular-products__arrow popular-products__prev-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>',
    nextArrow: '<div class="popular-products__arrow popular-products__next-arrow"><svg viewBox="0 0 100 100" style="display: block; width: 100%;"><path d="M 50,50 m 0,-49.5 a 49.5,49.5 0 1 1 0,99 a 49.5,49.5 0 1 1 0,-99" stroke="#c4c4c4" stroke-width="1" fill-opacity="0" ></path></svg></div>',
    rows: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots:true,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots:true,
        }
      }
    ]
  })

  $('.product-page__sm-slider').slick({
    slidesToShow: 5,
    speed: 800,
    arrows: true,
    infinite: true,
    dots: false,
    focusOnSelect: true,
    variableWidth: true,
    prevArrow: '<div class="main-brands__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="main-brands__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    rows: 0,
    asNavFor: '.product-page__lg-slider',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  })

  $('.product-page__lg-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-page__sm-slider',
    dots: false,
    arrows: false,
    fade: true,
    rows: 0
  })

  $('.gift-card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '<div class="main-brands__arrow prev-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.04651 12L7.10465 10.95L2.87209 6.75L50 6.75L50 5.25L2.87209 5.25L7.10465 1.05L6.04651 -3.84254e-06L5.24537e-07 6L6.04651 12Z" /></svg></div>',
    nextArrow: '<div class="main-brands__arrow next-arrow"><svg width="50" height="12" viewBox="0 0 50 12" xmlns="http://www.w3.org/2000/svg"><path d="M43.9535 0L42.8953 1.05L47.1279 5.25H0V6.75H47.1279L42.8953 10.95L43.9535 12L50 6L43.9535 0Z" /></svg></div>',
    fade: true,
    rows: 0
  })

}