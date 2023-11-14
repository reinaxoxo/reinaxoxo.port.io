// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  });
  