
let XD1= 'Aguante'
let XD2= 'Cho'
let XD2_1="'Gath"
let XD3= XD1 + " " + XD2 + XD2_1

console.log(XD3)

i=1;
    while(i<=10){
        i++
        console.log("ValorWhile:"+i)
        //Hacete un fibonacci flaco no seas pete
    }

    do{
        console.log("Valor DoWhile:"+i)
        i++
    }while(i>12)






    function sum(x,y){

        return x+y;
    }
    let plus=sum(10,30);
    console.log("Resultado de la funcion suma:"+ plus)


    
c=3;
function MileiSi_o_No(c){

if(c=3){
    return false;
}
    return true;
}
console.log(MileiSi_o_No(c))


//Estoy escribiendo cualquier cosa
//Objeto
let name;
let age;
let debt;

let pepin={
    name:'Pepin',
    age:60,
    debt: 6000000000

}
// console.log(pepin)

let ArrayPepin = [pepin, 'Pepe','Pepote','Zanopia'];
ArrayPepin.push('Espinoza');

console.log(ArrayPepin[0])
console.log(ArrayPepin[1])
console.log(ArrayPepin[2])
console.log(ArrayPepin[3])
console.log(ArrayPepin[4])

let slice=XD3.slice(7, 16);

console.log("Esto es un slice:" +slice)


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

for(let i =0; i<=10;i++){
    let XD1= 'Aguante'
    let XD2= 'Cho'
    let XD2_1="'Gath"
    let XD3= XD1 + " " + XD2 + XD2_1
    
    console.log(XD3)
}

