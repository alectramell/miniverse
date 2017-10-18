function openHome() {
	window.open('index.html','MiniVerse','nonresizable,height=550,width=800');
	return false;
}

function goLab() {
	top.window.location.href='lab.html';
}

function goHome() {
	top.window.location.href='index.html';
}

function goExit() {
	top.window.location.href='exit.html';
}

function goBack() {
    window.history.back();
}

function exitGame() {
	window.open('','_parent','');
	window.close();
}
