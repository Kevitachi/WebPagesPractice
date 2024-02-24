
//Switch Case sin mas
var value= parseInt(prompt("Ingresar un valor entre 1 y 3"))
switch(value){

case 1:
    console.log("Valor 1")
    break;

case 2:
    console.log("Valor 2")
    break;

case  3:
    console.log("Valor 3")
    break;

   default: 
    console.log("Exit")
    break;
}



//Obtencion de elementos en HTML usando DOM
let DomTest= document.getElementById("DOMtest")
console.log(DomTest)

let SidebarData = document.getElementsByClassName("optionsSidebar")
console.log(SidebarData)

let Anchortags = document.getElementsByTagName("a")
console.log(Anchortags)


//Obtencion de un elemento en base a el Style que posea (DOM)
let CSSitem = document.querySelector("li") //Selecciona siempre el primero en salir si hay varios

console.log(CSSitem)

let CSSitem2 = document.querySelectorAll("li")

console.log(CSSitem2)


//Event listener para un boton, al darle click muestra un mensaje de alerta
const button = document.querySelector('#buttonTest');

button.addEventListener('click', () => {
    alert('Esto en la Season 5 no pasaba')
})

//Otro tipo de Event listener, solo que en este caso es en base a que el usuario escriba en un text field (se muestra en consola pq no puse un alert("") )
const searchBox = document.querySelector('#searchBoxTest');

    searchBox.addEventListener('keyup', () =>{

            console.log("Esto en la Season 5 no pasaba pero en vez de mapearte los clicks te cago mapeando cuando escribis cabeza")

    })


    //Permite modificar el estilo de los objetos en una lista cuando el usuario los selecciona, el toggle modifica el estilo a uno creado en el archivo de styles
    const listaParaDOM = document.querySelectorAll('#pacoList');

    listaParaDOM.forEach(item => {

        item.addEventListener('click', () => {

            item.classList.toggle('completed')
        })
    });
