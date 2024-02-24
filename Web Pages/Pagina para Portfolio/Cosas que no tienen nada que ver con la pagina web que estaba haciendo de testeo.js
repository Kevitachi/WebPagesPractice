
// let XD1= 'Aguante'
// let XD2= 'Cho'
// let XD2_1="'Gath"
// let XD3= XD1 + " " + XD2 + XD2_1

// console.log(XD3)

// let slice=XD3.slice(7, 16);

// console.log("Esto es un slice:" +slice)



//Do y DoWhile
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

//Function sin mas
    function sum(x,y){
        return x+y;
    }
    let plus=sum(10,30);
    console.log("Resultado de la funcion suma:"+ plus)
//If sin mas    
c=3;
function MileiSi_o_No(c){

if(c=3){
    return false;
}
    return true;
}
console.log(MileiSi_o_No(c))




// //Objeto
let name;
let age;
let debt;

let pepin={
    name:'Pepin',
    age:60,
    debt: 6000000000
}
console.log(pepin)



//Recorriendo un Array con un For
let ArrayPepin = [pepin, 'Pepe','Pepote','Zanopia'];
ArrayPepin.push('Espinoza');

for(let i=0; i < ArrayPepin.length; i++){
    console.log(ArrayPepin[i])
}









//Creo un objeto Campeon para tener las estadisticas a utilizar o las "default"
let champion = {
    name:"",
    surname:"",
    baseHealth:0,
    maxBaseHealth:0,
    baseArmor:0,
    maxBaseArmor:0,
    baseMR:0,
    maxBaseMR:0,
    baseAD:0,
    maxBaseAD:0,
    moveSpeed:0,
    range:0,
    baseHealthReg:0,
    maxBaseHealthReg:0,
    baseMana:0,
    maxBaseMana:0,
    baseManaReg:0,
    maxBaseManaReg:0,
}

//Asigno a los objetos ChoGath y Aphelios las estadisticas del objeto 'champion'
let ChoGath = Object.assign({}, champion);
let Aphelios = Object.assign({}, champion);

//Declaro todos los valores para cada key en el objeto Aphelios
Aphelios.name="Aphelios",
Aphelios.surname="The Weapon of the Faithful",
Aphelios.baseHealth=580,
Aphelios.maxBaseHealth=2314,
Aphelios.baseArmor=26,
Aphelios.maxBaseArmor=97.4,
Aphelios.baseMR=30,
Aphelios.MaxBaseMR=52.1,
Aphelios.baseAD=55,
Aphelios.maxBaseAD=94.1,
Aphelios.moveSpeed=325,
Aphelios.range=550,
Aphelios.baseHealthReg=3.25,
Aphelios.maxBaseHealthReg=12.6,
Aphelios.baseMana=348,
Aphelios.maxBaseMana=1062,
Aphelios.baseManaReg=6.5,
Aphelios.maxBaseManaReg=13.3;

//Puedo crear el objeto de esta manera e igualarlo (no muy optimizado) es preferible declarar linea a linea los datos de cada value para el objeto como en Aphelios
let championCho = { 
    name: "Cho'Gath",
    surname:"Terror of the Void",
    baseHealth:644,
    maxBaseHealth:2242,
    baseArmor:38,
    maxBaseArmor:123,
    baseMR:32,
    maxBaseMR:66,
    baseAD:69,
    maxBaseAD:140.4,
    moveSpeed:345,
    range:125,
    baseHealthReg:9,
    maxBaseHealthReg:23.45,
    baseMana:270,
    maxBaseMana:1290,
    baseManaReg:7.2,
    maxBaseManaReg:14.85,
}
ChoGath = championCho; //Me daba paja hacerlo como con el Aphelios asi que es lo q hay

//Sin mas para testear que funcionara todo OK
console.log(champion)
console.log(ChoGath)
console.log(Aphelios)

console.log(Aphelios.maxBaseAD > ChoGath.maxBaseAD)

for(let key in ChoGath){
    console.log(key + ":"+ ChoGath[key])
}
