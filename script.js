﻿var myName = "Nwankwo Henry Chiemerie";

var myCourses = ['Html', 'css', 'javascript','Design']

document.getElementById("name").innerHTML = myName;
document.getElementById("courses").innerHTML = " " + myCourses;
console.log(myName);
console.log(myCourses);

if ((myCourses.length % 2)  == 0 ) {
	var number = [];
	number.length = 201;
	for (var i = 0; i < number.length; i++) {
		if ((i % 2) == 0) {
			console.log(i);
		}
	}
}