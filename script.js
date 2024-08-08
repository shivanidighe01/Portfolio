var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Engineering.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Development.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Problem Solving.')
    .pauseFor(2500)
    .start();




    var tl = new TimelineMax({repeat:-1});
    //gsap.registerPlugin(ScrollTrigger);
    tl.to(".imgdiv", 0.10, { yoyo:true, repeat:1})
      .to(".imgdiv", 0.9, {y:-20, yoyo:true, repeat:1});
    

      
      