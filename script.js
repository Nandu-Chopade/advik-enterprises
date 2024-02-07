window.onload = function () { 
	let slides = 
		document.getElementsByClassName('carousel-item'); 

	function addActive(slide) { 
		slide.classList.add('active'); 
	} 

	function removeActive(slide) { 
		slide.classList.remove('active'); 
	} 

	addActive(slides[0]); 
	setInterval(function () { 
		for (let i = 0; i < slides.length; i++) { 
			if (i + 1 == slides.length) { 
				addActive(slides[0]); 
				setTimeout(removeActive, 350, slides[i]); 
				break; 
			} 
			if (slides[i].classList.contains('active')) { 
				setTimeout(removeActive, 350, slides[i]); 
				addActive(slides[i + 1]); 
				break; 
			} 
		} 
	}, 3000); 
};

document.addEventListener("DOMContentLoaded", function() {
  var menuLinks = document.querySelectorAll('#menu a[href^="#"]');
  
  menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener("click", function(event) {
          event.preventDefault();
          var targetId = this.getAttribute("href");
          var targetSection = document.querySelector(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
              });
          }
      });
  });
});
