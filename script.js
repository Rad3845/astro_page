//document.write('P L F TILL THE DEATH');
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
	greeting = 'Good Evening, Welcome';
} else if (hourNow > 12) {
	greeting = 'Good Afternoon, Welcome';
} else if (hourNow > 0) {
	greeting = 'Good Morning, Welcome';
} else {
	greeting = 'Welcome';
}
document.write(greeting);
