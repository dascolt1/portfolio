/*
*  Using anime.js to animate certain text throughout portfolio page
*
*
*/


let nameAnimation = anime({
  targets: '.background h2', 
  translateX: '20vw',
  duration: 1200,
  easing: 'linear',
  direction: 'alternate'
});

let jobAnimation = anime({
  targets: '.background p', 
  translateX: '-20vw',
  duration: 1200,
  easing: 'linear',
  direction: 'alternate'
});