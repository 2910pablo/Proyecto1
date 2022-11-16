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
        
        //ESTE FOREACH ES POR SI HAY ALGUNA FOTO YA ABIERTA PARA QUE LA CIERRE
        demasindices(botones,index).forEach((indicesrestantes)=>{ 
            if(divTextoaExpandir[indicesrestantes].classList=="fotos-a-expandir abrir_cerrar"){
                divTextoaExpandir[indicesrestantes].classList = "fotos-a-expandir";
            }
        })

        //LA LINEA SIGUIENTE ES PARA CAMBIAR LA CLASE DEL DIV PARA QUE SE ABRA O SE CIERRE CUANDO SE PULSE
        divTextoaExpandir[index].classList.toggle("abrir_cerrar");
    });
});