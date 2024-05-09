let all = document.querySelector(`.all`);
let iconka = document.querySelector(`.iconka`);
let xx = document.querySelector(`.xx`);

all.addEventListener(`click`,()=>{
    if(xx.classList.contains(`new`)){
        xx.classList.remove(`new`);
        iconka.classList.add(`new`);
    } else{
        xx.classList.add(`new`);
        iconka.classList.remove(`new`);
    }
});

let img = document.querySelector(`.img`);
let rasm1 = document.querySelector(`.rasm1`);
let rasm2 = document.querySelector(`.rasm2`);

img.addEventListener(`click`,()=>{
    if(rasm2.classList.contains(`news`)){
        rasm2.classList.remove(`news`);
        rasm1.classList.add(`news`);
    } else{
        rasm1.classList.add(`news`);
        rasm2.classList.remove(`news`);
    }
});