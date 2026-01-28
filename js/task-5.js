function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector('.widget')
const p = div.querySelector(".color")
const btn = div.querySelector(".change-color")

console.log(btn);


btn.addEventListener('click', handleEvent)


function handleEvent(event) {

  const numbers = getRandomHexColor()
  document.body.style.backgroundColor = numbers
  p.textContent = document.body.style.backgroundColor = numbers

  

  // console.log(getRandomHexColor());
  
}