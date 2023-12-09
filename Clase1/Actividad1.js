const calcularPromedio = (numeros) => {
    let suma = 0;
    
    for(let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    let promedio = suma / numeros.length;
    return promedio;
}

// Prueba
let numeros = [6,6,6,6];
let resultado = calcularPromedio(numeros);
console.log(resultado);