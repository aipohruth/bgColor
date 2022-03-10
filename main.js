//creating variable 
const button = document.getElementById('btn');
const body = document.querySelector('.cover');

let colors = ['blue', 'black', 'orange', 'pink', 'red', 'brown', 'yellow', 'tomato','grey', 'green'];
const cLen = colors.length;
let i = 0;

//adding Event   
button.addEventListener('click', ()=>{
    //itenary operator
    i = i < cLen ? ++i : 0;
   body.style.backgroundColor = colors[i];
    });

  /*let randomColors = colors[Math.floor(Math.random() * cLen) + 1] ;
  body.style.backgroundColor = randomColors;*/ 
