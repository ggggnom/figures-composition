

var redRectangleOne = anime.timeline({
  targets: '.rectangle__red.one',
  duration: 1000,
  easing: 'easeInOutCubic',
  autoplay: true,
  direction: 'alternate',
  loop: true
});

redRectangleOne
.add({
  delay: 800,
  targets: '.rectangle__red.one ',
  rotate: [-17, 30],
})
.add({
  targets: '.rectangle__red.one ',
  rotate: [30, -17],
  delay: 3000
})
.add({
  targets: '.rectangle__red.one ',
  backgroundColor: '#fac92c',
  delay: 1000
})

var redRectangleTwo = anime.timeline({
  targets: '.rectangle__red.two',
  duration: 1500,
  easing: 'easeInOutCubic',
  autoplay: true,
  direction: 'alternate',
  loop: true
});

redRectangleTwo
.add({
  delay: 1000,
  targets: '.rectangle__red.two ',
  rotate: [-31, -60],
})
.add({
  targets: '.rectangle__red.two ',
  rotate: [-60, -31],
  delay: 2800,
  duration: 800,
  easing: 'easeInOutQuad'
})
.add({
  targets: '.rectangle__red.two ',
  backgroundColor: '#fac92c',
  delay: 1000
})


var redRectangleThree = anime.timeline({
  targets: '.rectangle__red.three',
  duration: 2000,
  easing: 'easeInOutCubic',
  autoplay: true,
  direction: 'alternate',
  loop: true
});

redRectangleThree
.add({
  delay: 2500,
  targets: '.rectangle__red.three ',
  rotate:  [12, -12],
})
.add({
  targets: '.rectangle__red.three ',
  rotate:  [-12, 12],
  delay: 1000,
  duration: 700,
  easing: 'easeInOutQuad'
})
.add({
  targets: '.rectangle__red.three ',
  backgroundColor: '#fac92c',
  delay: 1000
})

var redRectangleFour = anime.timeline({
  targets: '.rectangle__red.four',
  duration: 1500,
  easing: 'easeInOutCubic',
  autoplay: true,
  direction: 'alternate',
  loop: true
});

redRectangleFour
.add({
  delay: 2000,
  targets: '.rectangle__red.four',
  rotate: [-26, 15],
})
.add({
  targets: '.rectangle__red.four',
  rotate: [15, -26],
  delay: 2300,
  duration: 500,
  easing: 'easeInOutQuad'
})
.add({
  targets: '.rectangle__red.four',
  backgroundColor: '#fac92c',
  delay: 1000
})


var yellowRectangle = anime.timeline({
  targets: '.rectangle__big__yellow',
  duration: 1000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  delay: 200,
  loop: true
});

yellowRectangle
.add({
  targets: '.rectangle__big__yellow',
  rotate: [-10, -10]
})
.add({
  targets: '.rectangle__big__yellow',
  scale: 1.2
})


var redTriangle = anime.timeline({
  targets: '.triangle__small__red',
  duration: 500,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

redTriangle
.add({
  targets: '.triangle__small__red',
  rotate: [-200, -200]
})
.add({
  targets: '.triangle__small__red',
  scale: 1.5
})


var square = anime.timeline({
  targets: '.square__yellow',
  duration: 1500,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

square
.add({
  targets: '.square__yellow',
  rotate: [28, -55],
  delay: 5000
})
.add({
  targets: '.square__yellow',
  backgroundColor: '#f7b0be',
  delay: 1500
})


var rectangleGreen = anime.timeline({
  targets: '.rectangle__big__green',
  duration: 500,
  easing: 'easeInOutQuad',
  loop: true
});

rectangleGreen
.add({
  targets: '.rectangle__big__green',
  rotate: [-340,-340]
})
.add({
  targets: '.rectangle__big__green',
  rotate: [-340,-360]
})
.add({
  targets: '.rectangle__big__green',
  rotate: [-360,-340]
})
.add({
  targets: '.rectangle__big__green',
  delay: 4400,
  backgroundColor: '#1b4793'
})
.add({
  targets: '.rectangle__big__green',
  scale: 1.5,
  delay: 2800,
})
.add({
  targets: '.rectangle__big__green',
  scale: 1,
  delay: 1000,
})
.add({
  targets: '.rectangle__big__green',
  delay: 2000,
  backgroundColor: '#064426'
})
.add({
  targets: '.rectangle__big__green',
  scale: 1.5,
  delay: 1000,
})
.add({
  targets: '.rectangle__big__green',
  scale: 1,
  delay: 1000,
})



var stripSmall = anime.timeline({
  targets: '.strip.small__black',
  duration: 500,
  easing: 'easeInOutQuad',
  loop: true
});

stripSmall
.add({
  targets: '.strip.small__black',
  rotate: [-65, -30],
  delay: 6000
})
.add({
  targets: '.strip.small__black',
  rotate: [-30, -65],
  delay: 1000
})
.add({
  targets: '.strip.small__black',
  backgroundColor: '#ef3c23',
  duration: 800
})
.add({
  targets: '.strip.small__black',
  rotate: [-65, -30],
  delay: 2000
})
.add({
  targets: '.strip.small__black',
  rotate: [-30, -65],
  delay: 1000
})


var triangleBig = anime.timeline({
  targets: '.triangle__big__black',
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutQuad',
});

triangleBig
.add({
  delay: 4000,
  targets: '.triangle__big__black',
  rotate: [-32, -5]
})
.add({
  targets: '.triangle__big__black',
  rotate: [-5, -32],
})
.add({
  targets: '.triangle__big__black',
  rotate: [-32, -5]
})
.add({
  targets: '.triangle__big__black',
  rotate: [-5, -32],
})
.add({
  targets: '.triangle__big__black',
  rotate: [-32, -5]
})
.add({
  targets: '.triangle__big__black',
  rotate: [-5, -32],
})
