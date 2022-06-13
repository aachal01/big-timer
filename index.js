// control timer 
const timer = document.getElementById("timer")
const buttonPlus = document.getElementById("button-plus")
const buttonMinus = document.getElementById("button-minus")

let startTime = 120; //sec
const updateTimer = () => {
    let min = Math.floor(startTime / 60)
    let sec = startTime - min*60

    //make it two digit
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    timer.innerHTML = min + ":" + sec
    startTime = Math.max(0, startTime - 1)

}

updateTimer()

buttonPlus.addEventListener("click",() => {
    startTime += 60
    updateTimer()
})

buttonMinus.addEventListener("click",() => {
    startTime = Math.max(0, startTime - 60)
    updateTimer()
})

let intervalID;
const hideElement = (button) => button.style.display = "none"
const showElement = (button) => button.style.display = "initial"

const startButton = document.getElementById("start")
startButton.addEventListener("click", ()=> {
    updateTimer()
    intervalID = setInterval(updateTimer, 1000)
    hideElement(startButton)
    showElement(pauseButton)
    showElement(resetButton)
})

const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", ()=> {
    clearInterval(intervalID)
    hideElement(pauseButton)
    showElement(startButton)
    showElement(resetButton)
})

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", ()=> {
    startTime = 120
    updateTimer()
    clearInterval(intervalID)
    hideElement(resetButton)
    hideElement(pauseButton)
    showElement(startButton)
})


const fullscreen = document.getElementById("fullscreen")
fullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
})

const fullscreenenterbutton = document.getElementById("fullscreen-enter-button")
const fullscreenexitbutton = document.getElementById("fullscreen-exit-button")
document.documentElement.addEventListener("fullscreenchange", (event) => {
    if (document.fullscreenElement === document.documentElement) {
        hideElement(fullscreenenterbutton)
        showElement(fullscreenexitbutton)

    }else{
        hideElement(fullscreenexitbutton)
        showElement(fullscreenenterbutton)
    }
})