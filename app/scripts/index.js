import  "./markup-menu";
import $ from 'jquery';



import 'malihu-custom-scrollbar-plugin';
import 'jquery-mousewheel';
import '@fancyapps/fancybox';
// import svgUseIt from 'svg-use-it';

import Tabs from './components/tabs';
import Select from './components/select';
import popups from './components/popups';
import main from './components/main';
import sliders from './components/sliders';
// import map from './components/map';
import quantiy from './components/quantity';
import animation from './components/animation';

import 'lazysizes';
import '@justinribeiro/lite-youtube';

require('./components/accordion');

global.$ = $;
global.jQuery = $;

document.addEventListener("DOMContentLoaded", () => {
  // svgUseIt();
  popups();
  main();
  sliders();
  quantiy();
  animation();
  const malihuObj = {
    axis:"y",
    scrollInertia: 0,
    mouseWheelPixels: 0,
    mouseWheel:{
      enable: true,
    },
    documentTouchScroll:true,
    contentTouchScroll: true,
  }
  // if (document.getElementById('map')) {
    // map();
  // }

  global.customSelect = new Select();
  global.customTabs = new Tabs();

  $('.scroll-text').mCustomScrollbar(malihuObj);
  if( window.innerWidth >= 767) {
    $('.scroll-menu').mCustomScrollbar(malihuObj);
  }
  $('.select__list').mCustomScrollbar(malihuObj);

  $('.collection-block__nav').mCustomScrollbar({
    scrollbarPosition: 'outside',
    axis: 'x',
  });

  $('.option-values').mCustomScrollbar(malihuObj);

  $('.select').on('click', function(e){
    $('.select').not(this).removeClass('select--open');
  });
}, {passive: true});

$(window).on('load', () => {
  // if($('#preloader').length){
    // setTimeout(() => {
      $('#preloader').addClass('hide');
    // }, 10);
  // }

  if($('body').hasClass('main-page main')){
    var time = $('.modal-banner').data('time') * 1000;
    setTimeout(() => {
      $('.modal-banner').fadeIn();
    }, time);
  }
  document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    if(bg){
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });
});
$(document).on('click', '.modal-banner', function(event){
  let target = $(event.target);
  
  if(!target.closest('.banner-content__image').length || target.closest('.close-banner').length ){
    $(this).fadeOut();
  }
});
