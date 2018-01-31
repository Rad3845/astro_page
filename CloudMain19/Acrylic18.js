const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;



imgs.forEach(img => img.addEventListener('click', 
 imgClick));

function imgClick(e) {
	// Reset opacity
	imgs.forEach(img => (img.style.opacity = 1));


	// chnge images
	current.src = e.target.src;

	// Add fade in class
	current.classList.add('fade-in');

	// remove fade class
	setTimeout(() => current.classList.remove('fade-in'),
		500);

	// Change the opacity to opacity var
	e.target.style.opacity = opacity;
 }
