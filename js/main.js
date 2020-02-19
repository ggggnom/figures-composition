/*let fallOfRedSticks = anime({
  targets: '.rectangle__red',
  translateY: 1000,
  duration: 2000,
  easing: 'easeInOutQuad',
  autoplay: true
})
*/
/*
let fallOfRedSticks = anime({
  targets: '.rectangle__red',
  translateY: 1000,
  delay: 1000,
  duration: 6000,
  easing: 'easeInOutQuad',
  autoplay: true
})
let pushOnMe = document.getElementById('pushOnMe')
pushOnMe.onclick = fallOfRedSticks.play*/

var redRectangleOne = anime.timeline({
  targets: '.rectangle__red.one',
  duration: 2000,
  easing: 'easeInOutCubic',
  direction: 'alternate',
  autoplay: true,
});

redRectangleOne
.add({
  targets: '.rectangle__red.one ',
  rotate: -17,
})
.add({
  targets: '.rectangle__red.one ',
  rotate: [-17, 0],
})
.add({
  targets: '.rectangle__red.one ',
  translateX: function() {
      return anime.random(0, 1000);
    },
  easing: 'easeInOutQuad',
  delay: 1000
})
.add({
  targets: '.rectangle__red.one ',
  translateX: 0,
  scale: 2
})
.add({
  targets: '.rectangle__red.one ',
  rotate: -17,
});


var redRectangleTwo = anime.timeline({
  targets: '.rectangle__red.two',
  duration: 2000,
  easing: 'easeInOutCubic',
  direction: 'alternate',
  autoplay: true,
});

redRectangleTwo
.add({
  targets: '.rectangle__red.two ',
  rotate: -31,
  delay: 1000
})
.add({
  targets: '.rectangle__red.otwo',
  translateX: function() {
      return anime.random(-500, 0);
    },
  easing: 'easeInOutQuad',
  delay: 1000
})
.add({
  targets: '.rectangle__red.two ',
  rotate: 180,
})
.add({
  targets: '.rectangle__red.two ',
  translateX: 0,
  scale: 2
})
.add({
  targets: '.rectangle__red.two ',
  rotate: -31,
});


var redRectangleThree = anime.timeline({
  targets: '.rectangle__red.three',
  duration: 2000,
  easing: 'easeInOutCubic',
  direction: 'alternate',
  autoplay: true,
});

redRectangleThree
.add({
  targets: '.rectangle__red.three',
  rotate: 12,
})
.add({
  targets: '.rectangle__red.three',
  rotate: [12, 0],
})
.add({
  targets: '.rectangle__red.three ',
  translateX: function() {
      return anime.random(0, 1000);
    },
  easing: 'easeInOutQuad',
  delay: 2000
})
.add({
  targets: '.rectangle__red.three',
  translateX: 0,
  scale: 2
})
.add({
  targets: '.rectangle__red.three',
  rotate: 12,
});


var redRectangleFour = anime.timeline({
  targets: '.rectangle__red.three',
  duration: 2000,
  easing: 'easeInOutCubic',
  direction: 'alternate',
  autoplay: true,
});

redRectangleFour
.add({
  targets: '.rectangle__red.four',
  rotate: -26,
})
.add({
  targets: '.rectangle__red.four',
  rotate: [-26, 0],
})
.add({
  targets: '.rectangle__red.four ',
  translateX: function() {
      return anime.random(0, 1000);
    },
  easing: 'easeInOutQuad',
  delay: 1000
})
.add({
  targets: '.rectangle__red.four',
  scale: 2
})
.add({
  targets: '.rectangle__red.four',
  rotate: [0, -26],
});

let stripBig = anime({
  targets: '.strip.big__black',
  rotate: [53, 45],
  duration: 6000,
  easing: 'easeInOutQuad',
  delay: 2500,
  direction: 'alternate',
  autoplay: true
})
