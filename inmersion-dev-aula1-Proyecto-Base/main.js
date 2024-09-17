//ingresar numero en el campo para limitar los caracteres de la contraseña//
let  cantidad = document.getElementById('cantidad'); //es para declarar la variable "cantidad es el nombre de la variable,document.getElementById('cantidad'); es que la variable sera igual al numero que se ingrese"

let boton= document.getElementById('generar');
let contrasena =document.getElementById('contrasena'); 
//let es la declaracion de varibales actualmente, es mejor que var

 const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; //variable que almacenara los caracteres const es una variable constane, no cmabiara
 const mayusculas = /[A-Z]/; // Expresión regular para mayúsculas
 const numeros = /[0-9]/;

 //boton de generar
function generar() { //declarar funcion
let numeroDigitado = parseInt (cantidad.value); //parseint es para pasar texto a numero 

if (isNaN(numeroDigitado)) {
    alert("Por favor ingresa una cantidad para generar la contraseña.");
    return; // Salir de la función si no hay un número válido
}
 if( numeroDigitado < 8){

        alert("la cantidad de caracteres tiene que ser mayor que 8"); // es para amndar un mensaje al usuario
        
      return;
    }
  

    //VALIDAR LA CONTRASEÑA DE QUE LA LETRA INSERTADA SEA VALIDADA POR LA CADENA DE CARACTERES PARA CORRESPONDER QUE CONCIDEN
   let password = '';
    for(let i = 0; i < numeroDigitado; i ++) {

        let caracterAletorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)]; // se genera un caracter aletorio lehnght nos trae el tamaño de la cadena de caracteres Math.floor redondea el numero
    console.log(caracterAletorio);
        password+=caracterAletorio;
       

    }

contrasena.value=password;

setTimeout(() => {
   
    if (!mayusculas.test(password) || !numeros.test(password)) {
        alert("La contraseña es débil. Debe contener al menos una letra mayúscula y un número.");
    }
}, 100); // Espera 100 ms antes de mostrar la alerta

}




function limpiar(){

    
    contrasena.value= '';
}





//let texto = "texto"; //cadena de texto
//console.log(typeof cantidad); //typeof nos dice que tipo de variable estamos utilizando, console es la funcion para verlo en la consola

//validar que lo ingresado sea menor o igual a la cantidad limitada






