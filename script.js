let botones = document.querySelectorAll('.carta');
let divTextoaExpandir = document.querySelectorAll('.fotos-a-expandir');


//FUNCION PARA SACAR LOS INDICES RESTANTES DADO UN ARRAY Y UN INDICE DE REFERENCIA

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

botones.forEach((element,index) =>{
    element.addEventListener('click',()=>{
        demasindices(botones,index).forEach((indicesrestantes)=>{
            if(divTextoaExpandir[indicesrestantes].classList!="fotos-a-expandir"){
                divTextoaExpandir[indicesrestantes].classList.toggle("abrir_cerrar");
            }
        })
        divTextoaExpandir[index].classList.toggle("abrir_cerrar");
    });
});