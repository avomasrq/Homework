document.querySelector('.button').addEventListener('click', function() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
      if (link.style.display === 'none' || link.style.display === '') {
        link.style.display = 'block'; 
      } else {
        link.style.display = 'none';  
      }
    });
  });