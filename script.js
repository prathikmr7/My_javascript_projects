//target thte buttona nd teh body.

const colorBtn = document.querySelector('.colorBtn');
//to select the body:
const bodyBcg = document.querySelector('body');
//create the array to store the colors.

const colors = ['yellow', 'red', 'green', '#3b5998'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  //using teh variable bodyBcg:
  //bodyBcg.style.backgroundColor = colors[];
  //if we initialse to the array index, on clicking the button we will get the respective color of the index.
  //GOAL: TO chnage the color on clicking the button

  //Math gives the result between 0 to 0.9999,
  //but we need teh colors within the array:
  //multiplying the array name with the length:
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
