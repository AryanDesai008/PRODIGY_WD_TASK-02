let timer;
let isRunning = false;
let seconds = 0;
let laps = 1;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    laps = 1;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    const lapTime = formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${laps}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
    laps++;
}

function updateStopwatch() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = formatTime(seconds);
}

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
