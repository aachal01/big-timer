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
const hideButton = (button) => button.style.display = "none"
const showButton = (button) => button.style.display = "initial"

const startButton = document.getElementById("start")
startButton.addEventListener("click", ()=> {
    updateTimer()
    intervalID = setInterval(updateTimer, 1000)
    hideButton(startButton)
    showButton(pauseButton)
    showButton(resetButton)
})

const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", ()=> {
    clearInterval(intervalID)
    hideButton(pauseButton)
    showButton(startButton)
    showButton(resetButton)
})

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", ()=> {
    startTime = 120
    updateTimer()
    clearInterval(intervalID)
    hideButton(resetButton)
    hideButton(pauseButton)
    showButton(startButton)
})
