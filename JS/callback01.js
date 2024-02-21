//Funcion que toma dos numeros y un cabllback para realizar una operacion
function realizarOperacion(num1, num2, operacionCallback){
    console.log(`Operacion: ${num1} y ${num2}`);
    //llama al callback pasandole los dos numeros como argumentos
    operacionCallback(num1,num2);

}

//Callback que suma dos numreos
function sumar(a,b){
    console.log (`Suma: ${a+b}`);
}
//callback que multiplica dos numeros
function multiplicar(a,b){
    console.log(`Multiplicacion: ${a*b}`);
}

//Uso de las funcion con los callbacks
realizarOperacion(5,3, sumar);
realizarOperacion(5,3, multiplicar);
