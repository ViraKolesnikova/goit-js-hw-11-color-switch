import { colors } from "./data.js";

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

startBtnRef.addEventListener('click', onStartClick);
stopBtnRef.addEventListener('click', onStopClick);

const firstIndex = 0;
let lastIndex = colors.length - 1;
let randomIndex = 0;
let intervalId = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function onStartClick(event) {
  startBtnRef.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    randomIndex = randomIntegerFromInterval(firstIndex, lastIndex);
    bodyRef.style.backgroundColor = colors[randomIndex];
  }, 1000);  
};

function onStopClick(event) {
  clearInterval(intervalId);
  startBtnRef.removeAttribute('disabled', true);
}


