'use strict';
const wrapper = document.querySelector(".wrapper");

let catY = 0;
let catX = 0;


const render = () => {
    const imgCat = `<img src="./img/kitty64.png" alt="photo cat" class="imgCat"
    style="position: absolute; top: ${catY}px; left:${catX}px" >`;
    
    wrapper.innerHTML = imgCat;
};
render();

wrapper.addEventListener('click', (event) => {
    console.dir(event);
    if( event.target.alt != 'photo cat') {return};
    
    let mouseX = catX;
    let mouseY = catY;

    let centerUP = mouseX + 64/2; 
    let centerleft = mouseY + 64/2; 

    let rightUP = mouseX + 64; 
    let leftDown = mouseY + 64; 

    // console.log('mouseX', mouseX, 'mouseY', mouseY);


    catX = Math.floor((800* Math.random()));
    catY = Math.floor((300* Math.random()));

    let Xtarget = event.clientX ;
    let Ytarget = event.clientY ;

    console.log('X', Xtarget, 'Y', Ytarget);

    if((mouseX <= Xtarget) && (Xtarget <= centerUP) && (mouseY <= Ytarget ) && (Ytarget <= centerleft)) {
        console.log('Клік на верхній лівий кут');
        catX = 100;
        catY = 100;
        
    } 
 
    if((centerUP <= Xtarget) && (Xtarget <= rightUP) && (mouseY <= Ytarget ) && (Ytarget <= centerleft)) {
        console.log('Клік на верхній правий кут');
        // catX = centerleft;
        // catY = centerleft;
    }

    if((mouseX <= Xtarget) && (Xtarget <= centerUP) && (centerleft <= Ytarget ) && (Ytarget <= leftDown)) {console.log('Клік на нижній лівий кут')}

    if((centerUP <= Xtarget) && (Xtarget <= rightUP) && (centerleft <= Ytarget ) && (Ytarget <= leftDown)) {console.log('Клік на нижній правий кут')}



    render();

  

});
