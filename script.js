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

//FUNCION PARA EL CARROUSEL DEL DORMITORIO

let grande  =   document.querySelector(".grande");
let punto   =   document.querySelectorAll(".punto");

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener("click",()=>{
        let posicion = i
        let operacion = posicion * -50

        grande.style.transform = `translateX(${operacion}%)`
        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove("activo")
        })
        punto[i].classList.add("activo")

    })
})

//FUNCION PARA EL CARROUSEL DEL BAÑO

let grandebaño  =   document.querySelector(".grandebaño");
let puntobaño   =   document.querySelectorAll(".puntobaño");

puntobaño.forEach( (cadaPunto, i) => {
    puntobaño[i].addEventListener("click",()=>{
        let posicionBaño = i
        let operacionBaño = posicionBaño * -50

        grandebaño.style.transform = `translateX(${operacionBaño}%)`
        puntobaño.forEach((cadaPunto,i)=>{
            puntobaño[i].classList.remove("activo")
        })
        puntobaño[i].classList.add("activo")

    })
})
