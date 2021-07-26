const colors = [
  'green',
  'yellow',
  'magenta',
  'red',
  'rgba(133,122,200)',
  '#f15025',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
  // The logic here is to get random number of colors array from 0 -3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];

  console.log(randomNumber);
});
//Math.Random is used to get random number between 0 and 1. Math.floor is used to round a numember to the base integer
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
