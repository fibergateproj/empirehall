import $ from 'jquery';


export default () => {
  $('.main-nav__item.main-nav__item--shop').on('mouseover', () => {
    var windowWidth = window.innerWidth;

    if(windowWidth >= 1024){
      if ($('body').hasClass('main-page')) {
        $('body').removeClass('main');
      }
      if ($('body').hasClass('custome-page')) {
        $('body').removeClass('custome');
      }
      $('.shop-menu').addClass('open')
    }
  })
  $('.main-nav__item.main-nav__item--shop').on('click', (e) => {
    var windowWidth = window.innerWidth;

    if(windowWidth < 1024){
      if ($('body').hasClass('main-page')) {
        $('body').removeClass('main');
      }
      if ($('body').hasClass('custome-page')) {
        $('body').removeClass('custome');
      }
      $('.shop-menu').toggleClass('open');

    }
  })
  $('.shop-menu__inner').on('mouseleave', () => {
    $('.shop-menu').removeClass('open');
    $('html').removeClass('overflow');
  });

  $('.shop-menu').on('mouseleave', () => {
    $('.shop-menu').removeClass('open')
    if ($('body').hasClass('main-page')) {
      $('body').addClass('main')
    }
    if ($('body').hasClass('custome-page')) {
      $('body').addClass('custome')
    }
    $('html').removeClass('overflow');
  });
  (function(){
    let headerInput = $('#header-search-input'),
        headerInputVal = headerInput.val();
    headerInput.attr('value',headerInputVal);

    headerInput.on('keyup', function(){
      const value = $(this).val();
      $(this).attr('value',value);
    });

    headerInput.on('focus', () => {
      $('.header-search .icon-close').fadeIn(150);
      $('header-search').css({
        'cursor':'auto',
      })
    }).focusout(() => {
      $('.header-search .icon-close').fadeOut(150);
      $('header-search').css({
        'cursor':'pointer',
      })
    });

    $(document).on('click touchstart', (e) => {
      if (!$(e.target).closest('.header-search-input, .header-search__found').length) {
        $('.header-search__found').removeClass('active');
      }
      e.stopPropagation();
    });


    $(document).on('click','.header-search .icon-close', function(e){
      const closestInput = $(this).parents('.header-search').find('input');
      closestInput.focusout();
      closestInput.val('')
      closestInput.attr('value','');
    });
  }())
  // $('.shop-menu').on('click', function(e){
  //   var windowWidth = window.innerWidth;
  //   console.log(e.target);
  // })
  $('.shop-menu__list.first-level a').on('mouseenter', function listHover() {
    const subList = $(this).data('sub');

    $('.shop-menu__list.second-level').hide();
    $(`.shop-menu__list.${subList}`).show();
  })
  $('.shop-menu__list.second-level a').on('mouseenter', function listHover() {
    const subList = $(this).data('sub');

    $('.shop-menu__list.third-level').hide();
    $(`.shop-menu__list.${subList}`).show();
  })
  $('.shop-menu__inner').on('mouseleave', () => {
    $('.shop-menu__list.third-level, .shop-menu__list.second-level').hide();
  });
  if ($(window).width() < 1100 && $(window).width() > 768) {
    $('.shop-menu__list.first-level .has-submenu').on('click', function openList(e) {
      e.preventDefault();
      $('.shop-menu__list.second-level').hide();
      const list = $(this).data('sub');
      $(`.${list}`).show();
    })
    $('.shop-menu__list.second-level .has-submenu').on('click', function openList(e) {
      e.preventDefault();
      $('.shop-menu__list.third-level').hide();
      const list = $(this).data('sub');
      $(`.${list}`).show();
    })
    $(document).on('click touchstart', (e) => {
      if (!$(e.target).closest('.shop-menu__list, .main-nav__item--shop').length) {
        $('.shop-menu').removeClass('open');
      }
      e.stopPropagation();
    });
  }
  $('.shop-menu').on('mouseenter',function(e){

    if (!$(e.target).closest('.shop-menu__list, .main-nav__item--shop').length) {
      $(this).removeClass('open');
    }
    e.stopPropagation();
  });
  if ($(window).width() < 769) {
    $('.catalog-btn').on('click', ()=> {
      $('.shop-menu').toggleClass('open');
      $('html').addClass('overflow');
    })
    $('.shop-menu__list .has-submenu').on('click', function openList(e) {
      e.preventDefault();
      const list = $(this).data('sub');
      $(`.${list}`).addClass('active');
    })
    $('.shop-menu__back a').on('click', function closeList(e) {
      e.preventDefault();
      $(this).parents('.shop-menu__list').removeClass('active');
    })
  }
  $('.inspiration-image__button').on('click', function openCloseImg() {
    $(this).toggleClass('active');
    $(this).parent('.inspiration-image').toggleClass('open')
  })

  $('input, textarea').on('change', function checkValueInputs() {
    if ($(this).val() !== '') {
      $(this).addClass('value');
    } else {
      $(this).removeClass('value');
    }
  })

  $('input[type="date"]').each(function() {
      let el = this, type = $(el).attr('type');
      if ($(el).val() == '') $(el).attr('type', 'text');
      $(el).focus(() => {
          setTimeout(() => {
            $(el).attr('type', type);
            el.click();
          },150)
      });
      $(el).blur(() => {
          if ($(el).val() == '') $(el).attr('type', 'text');
      });
  });

  $('input, textarea').each(function eachInputs() {
    if ($(this).val() !== '') {
      $(this).addClass('value');
    } else {
      $(this).removeClass('value');
    }
  })

  $('.acardion__title').on('click', function openAcordion() {
    const thisItemParent = $(this).parent();
    if (thisItemParent.hasClass('active')) {
      thisItemParent.removeClass('active');
      thisItemParent.find('.acardion__inner').css('height', '0');
    } else {
      const itemHeight = thisItemParent.find('.acardion__content').outerHeight();
      $('.acardion__item').removeClass('active');
      $('.acardion__inner').css('height', '0');
      $('.acardion-second__item').removeClass('active');
      $('.acardion-second__inner').css('height', '0');
      thisItemParent.addClass('active');
      thisItemParent.find('.acardion__inner').css('height', itemHeight);
    }
  })

  function responseFunc() {
    const windowWidth =  window.innerWidth;

    if (windowWidth < 768){
      if ($('.header__right .language').length){
        $('.mobile-language').append($('.header__right .language'));
      }
    } else if ($('.mobile-language .language').length) {
      $('.mobile-language .language').insertAfter($('.header-search'));
    }
    if(windowWidth < 1024){
      $('.main-nav__item.main-nav__item--shop>a').on('click', function(e){
        e.preventDefault();
      })
    }
  }
  responseFunc();
  $(window).resize(responseFunc);
  $('.catalog__sidebar-button').on('click', () => {
    $('.catalog__sidebar').slideToggle('500');
  })

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 200) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  $('.no-login > a').on('click', (e) => {
    e.preventDefault();
    $('.login-popup').toggleClass('open');
  });
  $('.add-wishlist.no-login').on('click', (e) => {
    e.preventDefault();
    $('.login-popup').addClass('open');
  });

  $('#open-login').on('click', (e) => {
    e.preventDefault();
    $('.login-popup').toggleClass('open');
  });

  $(document).on('click touchstart', (e) => {
    if (!$(e.target).closest('.no-login > a, .login-popup, #open-login, .add-wishlist.no-login').length) {
      $('.login-popup').removeClass('open');
    }
    e.stopPropagation();
  });

  $('.header__link--basket').on('click', () => {
    $('.basket-popup').toggleClass('open')
    $('body, html').toggleClass('holder')
  })

  $('.basket-popup__close').on('click', () => {
    $('.basket-popup').removeClass('open')
    $('body, html').removeClass('holder')
  })

  if ($(window).width() > 1250) {
    $('.menu__open').on('mouseover', () => {
      $('.menu').toggleClass('open')
      $('body, html').toggleClass('holder-block')
    })
  } else {
    $('.menu__open').on('click', () => {
      $('.menu').toggleClass('open')
      $('body, html').toggleClass('holder-block')
    })
  }

  $(document).on('click','.menu__close', () => {
    $('.menu').removeClass('open')
    $('body, html').removeClass('holder-block');
    $('html').removeClass('overflow');
  })

  $('.language__current').on('click', function openCloseLang() {
    $(this).toggleClass('active');
    $('.language__list').toggleClass('open');
  })

  $(document).on('click touchstart', (e) => {
    if (!$(e.target).closest('.language__current, .language__list').length) {
      $('.language__current').removeClass('active');
      $('.language__list').removeClass('open');
    }
    e.stopPropagation();
  });

  // if (window.innerWidth <= 767) {
  //   const lang = $('.language').html();
  //   $('.mobile-language').html(lang)
  // }

  if (window.innerWidth <= 1023) {
    const title = $('.product-page').find('.head-block').html();
    $('.product-page').prepend(title)
  }

  $('.slider-buttons__button.zoom').on('click', () => {
    $('.product-page__lg-slide.slick-current.slick-active').trigger('click');
  })

  if (window.innerWidth > 1024) {
    $('.tooltip-icon').on('mouseenter', function hoverTooltip() {
      $(this).find('.tooltip').addClass('open')
    })

    $('.tooltip-icon, .tooltip').on('mouseleave', function hoverTooltip() {
      $(this).find('.tooltip').removeClass('open')
    })
  } else {
    $('.tooltip-icon, .tooltip').on('click', function toogleTooltip() {
      $(this).find('.tooltip').toggleClass('open')
    })

    $(document).on('click touchstart', (e) => {
      if (!$(e.target).closest('.tooltip-icon, .tooltip').length) {
        $('.tooltip').removeClass('open');
      }
      e.stopPropagation();
    });
  }

  $('.checkout-block__link').on('click', function showInfo() {
    $('.discount-block').removeClass('active');
    if($(this).attr('href') === '#login') {
      $('.discount-block').addClass('active');
    }
  })

  $(document).on('click touchstart', (e) => {
    if (!$(e.target).closest('.cart-add-popup').length) {
      $('.cart-add-popup').removeClass('active');
    }
    e.stopPropagation();
  });
}
