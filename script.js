let botones = document.querySelectorAll('.carta');
let divTextoaExpandir = document.querySelectorAll('.fotos-a-expandir');


botones.forEach((element,index) =>{
    element.addEventListener('click',()=>{
        divTextoaExpandir[index].classList.toggle("abrir_cerrar");
    });
});


a=[1,3,5,7]
function demasindices(array,indice){
    let aux=[]
    for(let i = 0;i<array.length;i++) {
        if(i!=indice){
            aux.push(i);
        }
    }
    return(aux)
}