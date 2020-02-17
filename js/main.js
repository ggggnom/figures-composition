/*let fallOfRedSticks = anime({
  targets: '.rectangle__red',
  translateY: 1000,
  duration: 2000,
  easing: 'easeInOutQuad',
  autoplay: true
})
*/
let fallOfRedSticks = anime({
  targets: '.rectangle__red',
  translateY: 1000,
  duration: 2000,
  easing: 'easeInOutQuad',
  autoplay: false
})
let pushOnMe = document.getElementById('pushOnMe')
pushOnMe.onclick = fallOfRedSticks.play
