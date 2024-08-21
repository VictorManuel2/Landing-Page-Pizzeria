((d) => {
    const btnMenu = d.querySelector('.menu-icon');
    const menu = d.querySelector('.links-respons');
    
    btnMenu.addEventListener('click', () =>{
        btnMenu.firstElementChild.classList.toggle('none');
        btnMenu.lastElementChild.classList.toggle('none');
    
        menu.classList.toggle('is-active')
    });

    d.addEventListener('click', (e) =>{
        if(!e.target.matches('.links-option a')) return false;
        
        btnMenu.firstElementChild.classList.remove('none');
        btnMenu.lastElementChild.classList.add('none');
    
        menu.classList.remove('is-active')
    })
})(document);

//carrusel
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const carruselImg = document.querySelectorAll('.carrusel-img');

btnLeft.addEventListener('click', toLeft);
btnRight.addEventListener('click', toRight);

setInterval(() => {
    toRight();
}, 5000);

let operation = 0;
let count = 0;
let widthImg = 100 / carruselImg.length;

function toRight(){
    if(count >= carruselImg.length - 1){
        count = 0;
        operation = 0;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
        return;
    }
    count++;
    operation = operation + widthImg;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = 'all 1s ease-in-out';
}

function toLeft(){
    count--;
    if(count < 0){
        count = carruselImg.length - 1;
        operation = widthImg * (carruselImg.length - 1);
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
        return;
    }
    operation = operation - widthImg;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = 'all 1s ease-in-out';
}
/*******copyright********/
const year = document.querySelector('.year').textContent = new Date().getFullYear();