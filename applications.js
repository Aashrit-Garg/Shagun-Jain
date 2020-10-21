const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('h1');
// END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// SCENES
let scene = new ScrollMagic.Scene({
    duration: 12000,
    triggerElement: intro,
    triggerHook: 0
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);

// TEXT ANIMATION
const textAnimation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnimation).addTo(controller);

// VIDEO ANIMATION
let accelAmount = 0.5;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;

    video.currentTime = delay;
}, 150);