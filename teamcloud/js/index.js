// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('zaparevideo'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'zapbanner.json'
// }) 

lottie.loadAnimation({
    container: document.getElementById('zaparevideo'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'zapbanner.json' // the path to the animation json
});

lottie.loadAnimation({
  container: document.getElementById('zapareeqry'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  // path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json' // the path to the animation json
  path: 'zapenqry.json' // the path to the animation json
});