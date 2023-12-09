let Estudiantes = [];
let cantidadEstudiantes = Number(prompt("Ingrese la cantidad de estudiantes a registrar: "));

for(let i = 0; i < cantidadEstudiantes; i ++) {
    
    let nombreEstudiante = prompt("Ingrese el nombre: ");
    let edadEstudiante = prompt("Ingrese la edad: ");
    
    let objeto = {
        nombre: nombreEstudiante,
        edad: edadEstudiante
    };
    
    Estudiantes.push(objeto);
}

for (let estudiante in Estudiantes) {
    console.log(Estudiantes[estudiante]);
}