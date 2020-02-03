const notes = ["A", "B", "C", "D", "E", "F", "G"]
const modifyer = ["&#9839", "&#9837", ""]
const extension = ["m", "&#55", " dim", " half-dim"]
let running = false;
let timer;
let beat = 0;

function generateRandomChord() {
	function selectRandomFromList (list) {
		return list[Math.floor(Math.random()*list.length)]
	}
	return selectRandomFromList(notes) + selectRandomFromList(modifyer) + selectRandomFromList(extension)
}

function setText (node, text) {
	document.getElementById(node).innerHTML = text;
}

function changeBgCol (element, color) {
	document.getElementById(element).style.backgroundColor = color;
}

function clearBoxes(){
	const boxes = document.querySelectorAll(".box");
	boxes.forEach((element) => element.style.backgroundColor = "white");

}

function nextBeat () {
	beat += 1;
	if (beat === 5) beat = 1;
	if (beat === 1) {
		setText("Chord", generateRandomChord());
		clearBoxes();
	}	
	console.log(beat);
	changeBgCol("Box"+beat, "red");
	
}

function startTimer() {
	if (running === false) {
		running = true;
		beat = 1;
		changeBgCol("Box1", "red");
		setText("Chord", generateRandomChord())
		timer = setInterval(nextBeat, 1000)
	}
	console.log("Started");
}

function stopTimer() {
	if (running === true && timer) {
		running = false;
		clearInterval(timer);
		clearBoxes();
	}
	console.log("Stopped");
}
