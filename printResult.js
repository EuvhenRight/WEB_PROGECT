const result = document.getElementById('date_calculate_result')
const timerResult = document.getElementById("timer")

export const printError = (errorText) => {
    result.innerText = errorText;
}

export const printResult = ({ years, months, days }) => {
    result.innerText = `Year: ${years} - Month: ${months} - Day: ${days}`;
}

export const printTimerEnd = textEnd => {
    timerResult.innerText =  textEnd;
}
