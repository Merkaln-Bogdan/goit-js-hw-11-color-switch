const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const delay = 3000;
let timer1 = null;
btnStart.addEventListener('click', startButtonClick);
btnStop.addEventListener('click', stopRandomInteger);
// Start backgroundColor change
function startButtonClick() {
  randomIntegerFromInterval(0, colors.length);
  timer1 = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, delay);
}
// Stop backgroundColor change
function stopRandomInteger(e) {
  e.currentTarget = clearInterval(timer1);
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
