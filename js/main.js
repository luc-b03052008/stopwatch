const startButton = document.getElementById("js--start");
const resetButton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startButton.onclick = function () {
    if (running) {
        clearInterval(timer);
        startButton.innerText = "Start"; 
    } else {
        timer = setInterval(function () {
            seconds += 1;
            if (seconds === 60) {
                minutes += 1;
                minutesTimer.innerText = minutes;
                seconds = 0;
            }
            secondsTimer.innerText = seconds;
        }, 100);
        startButton.innerText = "Stop"; 
    }
    running = !running; 
};

resetButton.onclick = function () {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    secondsTimer.innerText = seconds;
    minutesTimer.innerText = minutes;
    startButton.innerText = "Start"; 
};


const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = "2";
rangeValue.innerText = slider.value + "x";

slider.oninput = function () {
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
};


let data = {
    "text": "Mooie foto van de zon die ondergaat",
    "img": "img/foto.webp",
};

const text = document.getElementById("js--text");
text.innerText = data.text;

const image = document.getElementById("js--image");
image.src = data.img;

