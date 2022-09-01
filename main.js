import {printError, printResult, printTimerEnd} from './printResult.js'
import getDateDiff from './dataCalc.js'
import {Howl, Howler} from 'howler';

const sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
});


const dataCalcForm = document.getElementById("date_calculate");


dataCalcForm.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)

    const firstInput = formData.get('firstDate')
    const secondInput = formData.get('secondDate')
    const dateDiff = getDateDiff(firstInput, secondInput)

    if (!firstInput || !secondInput) {
        printError('Enter correct date!!!!')
    } else {
        printResult(dateDiff)
    }
}

let timerInput = document.getElementById("time");
let timerShow = document.getElementById("timer");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");


// let timerMinute = 0

buttonStart.addEventListener('click', function () {
    let timerMinute = parseInt(timerInput.value) * 60;


    buttonStop.addEventListener('click', function () {
        clearInterval(timerInput.value)
    })

    let timer = setInterval(function () {

        let seconds = timerMinute % 60;
        let minutes = timerMinute / 60 % 60;
        let hours = timerMinute / 60 / 60 % 60;
        if ((timer <= 0)) {
            clearInterval(timer);
            printTimerEnd("End");
            sound.play();// Не разобрался

        } else if ((timer == undefined)) {

        } else {
            let srtTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`
            timerShow.innerHTML = srtTimer; // Не обновляется строка, не пойму почему
        }
    }, 1000)
    --timerMinute;
})




