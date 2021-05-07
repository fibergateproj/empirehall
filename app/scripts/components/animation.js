import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

export default () => {

  const ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  const mainBrends = new TimelineMax()
  .add([
    TweenMax.staggerFrom('.main-brands__item img', 0.2, {'transform': 'scaleX(0)'}, .1),
  ])

  const mainContent = new TimelineMax()
  .add([
    TweenMax.staggerFrom('.main-content__decore', 1.2, {yPercent: -20, 'opacity': '0'}, .3),
    TweenMax.staggerFrom('.main-content__content', 1.2, {xPercent: -20, 'opacity': '0'}, .3),
    TweenMax.staggerFrom('.main-content__image', 1.2, {xPercent: 20, 'opacity': '0'}, .3),
  ])

  const aboutBrends = new TimelineMax()
  .add([
    TweenMax.staggerFrom('.about-brands__image img', 0.4, {'transform': 'scaleX(0)'}, .1),
  ])

  const instashopItem = new TimelineMax()
  .add([
    TweenMax.staggerFrom('.instashop__item', 1.5, {yPercent: -20, 'opacity': '0'}, .3),
  ])

  if (window.innerWidth >= 1250) {

    $(window).on('scroll', () => {
      $('.about-content__image').css('transform', `translateY(-${$(window).scrollTop()/20}px)`);
      $('.about-content__content').css('transform', `translateY(${$(window).scrollTop()/20}px)`);
    });

    if ($('.main-brands__item').length > 0) {
      $('.main-brands__item').each(function animateFn1() {
        const scenePartner = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -750
        })
        .setTween(mainBrends)
        scenePartner.addTo(ctrl);
      })
    }

    if ($('.main-content__inner').length > 0) {
      $('.main-content__inner').each(function animateFn2() {
        const scenePartner = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -750
        })
        .setTween(mainContent)
        scenePartner.addTo(ctrl);
      })
    }

    if ($('.about-brands__image').length > 0) {
      $('.about-brands__image').each(function animateFn1() {
        const scenePartner = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -800
        })
        .setTween(aboutBrends)
        scenePartner.addTo(ctrl);
      })
    }

    if ($('.instashop__item').length > 0) {
      $('.instashop__item').each(function animateFn1() {
        const scenePartner = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -750
        })
        .setTween(instashopItem)
        scenePartner.addTo(ctrl);
      })
    }

    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        reverse: false
      }
    });
    $('.main-catalog__item').each(function anim() {
      const tween = TweenMax.from($(this), 0.8, {yPercent: -10, 'opacity': '0'}, .3 );
      let scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -800
        }).setTween(tween).addTo(controller);
    });

    $('.all-brands__item > img').each(function anim() {
      const tween = TweenMax.from($(this), 0.4, {'transform': 'scaleX(0)'}, .1);
      let scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -800
        }).setTween(tween).addTo(controller);
    });

    $('.inspiration-block__item').each(function anim() {
      const tween = TweenMax.from($(this), 1.4, {'opacity': '0'}, .3);
      let scene = new ScrollMagic.Scene({
          triggerElement: this,
          offset: -600
        }).setTween(tween).addTo(controller);
    });

  }

}
