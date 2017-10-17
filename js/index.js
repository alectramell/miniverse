function openHome() {
	window.open('index.html','MiniVerse','nonresizable,height=645,width=1041');
	return false;
}

function openLab() {
	var pages = ['lab.html','home.html']

	document.getElementById('mainFrame').src = pages[0];
}

function openGrass() {
	var pages = ['lab.html','home.html']

	document.getElementById('mainFrame').src = pages[1];
}
