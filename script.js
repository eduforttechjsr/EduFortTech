document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('#nav ul'); // select ul inside nav

  // Toggle menu on hamburger click
  navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));

  // Smooth scrolling for nav links & close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if(navMenu.classList.contains('active')) navMenu.classList.remove('active');
      }
    });
  });
});
