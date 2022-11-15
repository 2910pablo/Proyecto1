let botones = document.querySelectorAll('.carta');
let divTextoaExpandir = document.querySelectorAll('.fotos-a-expandir');


botones.forEach((element,index) =>{
    element.addEventListener('click',()=>{
        divTextoaExpandir[index].classList.toggle("abrir_cerrar");
    });
});