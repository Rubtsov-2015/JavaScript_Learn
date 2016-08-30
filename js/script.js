var fullTime = document.getElementById('time');

getTime();

function getTime() {
	var date = new Date();
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var millsec = date.getMilliseconds();
	if (hours < 10){
		hours = '0' + hours;
	}
	if (min < 10){
		min = '0' + min;
	}
	if (sec < 10){
		sec = '0' + sec;
	}
	var str = hours + ':' + min +':' + sec + ':' + millsec;
	document.getElementById('time').innerHTML = str;
	setTimeout('getTime()', 1000);
};

//Вторая задачка

var countBtn = document.getElementsByTagName('button').length;
var btn = document.getElementsByTagName('button');


for(i = 0; i < countBtn; i++){
	setClick(i);
}

function setClick(i){
	var a = i;
	a++;
	btn[i].classList.add(a);
	btn[i].addEventListener("click", function(){
		alert('Кнопка' + a);
	});
};