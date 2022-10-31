const bxs = document.getElementsByClassName('box');
const barva = document.getElementById('#zobrazeni');


[...bxs].forEach((bx) => {
    bx.onclick = () =>{

       
        zobrazeni.style.backgroundColor = bx.dataset.color;
        barva.style.backgroundColor = bx.dataset.color;
    };
})