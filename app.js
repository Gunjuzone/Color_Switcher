const colors = [
  'green',
  'grey',
  'yellow',
  'pink',
  'red',
  'rgba(133,122,200)',
  '#f15025',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
  // The logic here is to get random number of colors array from 0 -3
  //We set out by intially equating randomNumber to 2(color yelow) and then we declared a Global Function of getRandomNumber and we replaced our 2 with it

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

  console.log(randomNumber);
});
//Math.Random is used to get random number between 0 and 1. Math.floor is used to round a numember to the base integer
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
