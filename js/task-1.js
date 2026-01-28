const itemLi = document.querySelectorAll('.item')

console.log("Numbers of categories:",itemLi.length);


itemLi.forEach(item => {
  const title = item.querySelector('h2').textContent
  const count = item.querySelectorAll("ul li").length
  console.log("Category:",title);
  console.log("Elements:",count);
  
})

