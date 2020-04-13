const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timer1 = null;
btnStart.addEventListener('click', startButtonClick);
btnStop.addEventListener('click', stopRandomInteger);
// Start backgroundColor change
function startButtonClick() {
  randomIntegerFromInterval(0, 5);
  timer1 = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 3000);
}
// Stop backgroundColor change
function stopRandomInteger() {
  clearInterval(timer1);
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
