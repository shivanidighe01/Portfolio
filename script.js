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
    

      
  
      const menuBtn = document.getElementById('menu-btn');
      const navContent = document.querySelector('.nav-content');
      const navLinks = document.querySelectorAll('.nav-content a');
      const menuIcon = menuBtn.querySelector('i');
    
      menuBtn.addEventListener('click', () => {
        navContent.classList.toggle('show');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times'); // Toggle icon
      });
    
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navContent.classList.remove('show');
          menuIcon.classList.add('fa-bars');
          menuIcon.classList.remove('fa-times');
        });
      });
    
      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
        