function openHome() {
	window.open('index.html','MiniVerse','nonresizable,height=645,width=1041');
	return false;
}

function car_up() {
	document.getElementById("car").src="img/cars/black_up.png";
}

function car_down() {
	document.getElementById("car").src="img/cars/black_down.png";
}

function car_left() {
	document.getElementById("car").src="img/cars/black_left.png";
}

function car_right() {
	document.getElementById("car").src="img/cars/black_right.png";
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
	document.getElementById("car").src="img/cars/black_up.png";
    }
    else if (e.keyCode == '40') {
        // down arrow
	document.getElementById("car").src="img/cars/black_down.png";
    }
    else if (e.keyCode == '37') {
       // left arrow
	document.getElementById("car").src="img/cars/black_left.png";
    }
    else if (e.keyCode == '39') {
       // right arrow
	document.getElementById("car").src="img/cars/black_right.png";
    }
    else if (e.keyCode == '187') {
       // a
	document.getElementById("car").src="img/cars/black_up_lights.png";
    }

}
