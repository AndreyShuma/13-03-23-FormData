'use strict';
const wrapper = document.querySelector(".wrapper");

//  Задаємо початкові координати наших персонажей
let catX = 50;
let catY = 50;

let catX_2 = 150;
let catY_2 = 250;

let catX_3 = 300;
let catY_3 = 100;

//  Складаємо функції
const render1 = () => {
    const imgCat1 = `<img src="./img/kitty64.png" alt="photo cat" class="imgCat"
    style="position: absolute; top: ${catY}px; left:${catX}px" >`;

    wrapper.innerHTML = imgCat1;
};

const render2 = () => {
    const imgCat2 = `<img src="./img/kitty64_2.png" alt="photo cat" class="imgCat"
    style="position: absolute; top: ${catY_2}px; left:${catX_2}px" >`;

    wrapper.innerHTML += imgCat2;
};
const render3 = () => {
    const imgHole = `<img src="./img/hole.png" alt="photo hole" class="imgCat"
    style="position: absolute; top: ${catY_3}px; left:${catX_3}px" >`;

    wrapper.innerHTML += imgHole;
};

//  Визиваємо функції
render1();
render2();
render3();

//  навішуємо подію на блок wrapper
wrapper.addEventListener('click', (event) => {
    console.dir(event);
    if( event.target.alt != 'photo cat') {return};
    
    let mouseX = catX;
    let mouseY = catY;

    let centerUP = mouseX + 64/2; 
    let centerleft = mouseY + 64/2; 

    let rightUP = mouseX + 64; 
    let leftDown = mouseY + 64; 

    // catX = Math.floor((800* Math.random()));
    // catY = Math.floor((200* Math.random()));

    // Задаємо 
    let Xtarget = event.clientX;
    let Ytarget = event.clientY;

      // !Перевірка в який кут був клік мишка на кота
    if((mouseX <= Xtarget) && (Xtarget <= centerUP) && (mouseY <= Ytarget ) && (Ytarget <= centerleft)) {
        // console.log('Клік на верхній лівий кут');
        catX += 30 ;
        catY += 30 ;
    } 
    if((centerUP <= Xtarget) && (Xtarget <= rightUP) && (mouseY <= Ytarget ) && (Ytarget <= centerleft)) {
        // console.log('Клік на верхній правий кут');
        catX += -30 ;
        catY += 30 ;
    }
    if((mouseX <= Xtarget) && (Xtarget <= centerUP) && (centerleft <= Ytarget ) && (Ytarget <= leftDown)) {
        // console.log('Клік на нижній лівий кут');
        catX += 30 ;
        catY += -30 ;
    }
    if((centerUP <= Xtarget) && (Xtarget <= rightUP) && (centerleft <= Ytarget ) && (Ytarget <= leftDown)) {
        // console.log('Клік на нижній правий кут');
        catX += -30 ;
        catY += -30 ;
    }

    // Виводимо в консоль інформацію про кота
    console.log('Координати кота Старі X:', mouseX, 'Y:', mouseY);
    console.log('Клік на коті X:', Xtarget, 'Y:', Ytarget);
    console.log('Координати кота Нові X:', catX, 'Y:', catY);


    
    //! Коти зіштовхнулися
    if( ((catX+50) >= catX_2) && ( (catX_2+60) >= catX) && ((catY+40) >= catY_2) && ( (catY_2+50) >= catY)) {
        catX = 50;
        catY = 50;
    };

    //Визиваємо функці
    render1();
    render2();
    render3();
    
    
    // !Кіт дійшов до нірки ти виграв
    if( ((catX+50) >= catX_3) && ( (catX_3+60) >= catX) && ((catY+40) >= catY_3) && ( (catY_3+50) >= catY) )  {
        console.log("Привіт нірка!!!!!!!!!!!!!!!!");
        let alert = `<div class="alert"> <div class="alert_div">Ти Виграв!!!! Молодець ;)))</div> </div>`;
        wrapper.innerHTML += alert;
    };

});
