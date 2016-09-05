var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
	greeting = 'Astro Acrylic Presents';
} else if (hourNow > 12) {
	greeting = 'You Should be up';
} else if (hourNow > 0) {
	greeting = 'Wake Up!!';
} else {
	greeting = 'Welcome';
}
document.write(greeting);