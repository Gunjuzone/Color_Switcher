// We are starting with the an array list of numbers and alphabets because hex color propery is 6 alphabets and numbers that start with #

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//Select the button
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
  //Set up for loop to iterate through the array.
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumbers()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// We set up a Global function that multiply 0-1 by  array hex hex length
function getRandomNumbers() {
  return Math.floor(Math.random() * hex.length);
}
