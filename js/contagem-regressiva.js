const EVENT_DATE = "01 07, 2022 14:15:30" // mudar para data do evento => format: MM DD YYYY HH:MM:SS

let timer
let days
let hours
let minutes
let seconds
let currentDate
let duration

const DISPLAY = {
    dia: document.querySelector('.output-dia'),
    hora: document.querySelector('.output-hora'),
    minuto: document.querySelector('.output-minuto'),
    segundo: document.querySelector('.output-segundo'),
    boom: document.querySelector('.output-boom')
}

function startTimer(countDownDate) {
    const timer = setInterval(function () {
        currentDate = new Date().getTime();
        duration = countDownDate - currentDate;

        days = Math.floor(duration / (1000 * 60 * 60 * 24));
        hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((duration % (1000 * 60)) / 1000);

        DISPLAY.dia.textContent = days;
        DISPLAY.hora.textContent = hours;
        DISPLAY.minuto.textContent = minutes;
        DISPLAY.segundo.textContent = seconds;
        
        if (duration <= 1000) {
            DISPLAY.dia.classList.add('text-success');
            DISPLAY.hora.classList.add('text-success');
            DISPLAY.minuto.classList.add('text-success');
            DISPLAY.segundo.classList.add('text-success');
            DISPLAY.boom.classList.toggle('d-none');
            
            DISPLAY.dia.textContent = 'B';
            DISPLAY.hora.textContent = 'O';
            DISPLAY.minuto.textContent = 'O';
            DISPLAY.segundo.textContent = 'M';
            
            clearInterval(timer);
        }
    }, 1000);
}

window.onload = function () {
    let countDownDate = new Date(EVENT_DATE).getTime();
    startTimer(countDownDate);
};