'use strict';
/* Funzioni */
function prevNextFn(type, i = false){
    itemAll[currentImg].classList.remove('active');
    boxAll[currentImg].classList.remove('active');
    if(type === 'prev'){
        if(currentImg > 0){
            currentImg--;
        }else{
            currentImg = infoArray.length - 1;
        }
    }else if(type === 'thumbnails'){
        currentImg = i;
    }else{
        if(currentImg < infoArray.length - 1){
            currentImg++;
        }else{
            currentImg = 0;
        }
    }
    itemAll[currentImg].classList.add('active');
    boxAll[currentImg].classList.add('active');
}
//elementi dal dom
const items = document.querySelector('.items');
const thumbnails = document.querySelector('.thumbnails');
//immagini e testo
const infoArray = [
    {
        image : '01.jpg',
        title : 'Image 1',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
    },
    {
        image : '02.jpg',
        title : 'Image 2',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
    },
    {
        image : '03.jpg',
        title : 'Image 3',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
    },
    {
        image : '04.jpg',
        title : 'Image 4',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
    },
    {
        image : '05.jpg',
        title : 'Image 5',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
    },
];

//immagine corrente
let currentImg = 0;

//crea gli elementi nel dom
for(let i = 0; i < infoArray.length; i++){
    const slide = document.createElement('div');
    const box = document.createElement('div');
    const elementImg = document.createElement('img');
    const boxText = document.createElement('div');
    const elementTitle = document.createElement('h2');
    const elementDescription = document.createElement('p');

    slide.classList.add('item');
    box.classList.add('box');

    elementTitle.innerText = infoArray[i].title;
    elementDescription.innerText = infoArray[i].description;
    elementImg.src = `img/${infoArray[i].image}`;
    elementImg.alt = `Immagine ${i}`;
    
    if(currentImg === i){
        slide.classList.add('active');
        box.classList.add('active');
    }
    
    boxText.append(elementTitle, elementDescription);
    box.append(elementImg);
    thumbnails.append(box);
    slide.append(elementImg.cloneNode(true), boxText);
    items.append(slide);
}

//elementi dal dom
const itemAll = document.querySelectorAll('.item');
const boxAll = document.querySelectorAll('.box');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//immagine precedente
prev.addEventListener('click', function(){
    prevNextFn('prev');
});

//immagine successiva
next.addEventListener('click', function(){
    prevNextFn('next');
});

//thumbnails
//elementi dal dom
const thumbnailsAll = document.querySelectorAll('.box');
//tutti i  box
for(let i = 0; i < thumbnailsAll.length; i++){
    thumbnailsAll[i].addEventListener('click', function(){
        prevNextFn('thumbnails', i);
    });
}
//Intervallo
const interval = 3000;
let set = setInterval(prevNextFn, interval);
const start = document.getElementById('start');
const stop = document.getElementById('stop');
start.addEventListener('click', function(){
    clearInterval(set);
    set = setInterval(prevNextFn, interval);
});
stop.addEventListener('click', function(){
    clearInterval(set);
});