let variable_control=true;

//función

function recalcularPrecio(precio){
    return precio*40;
}
 
//aqui se ve el ciclo y condicionales
 while (variable_control) {
     let eleccion = prompt("Desea ingresar un curso? Diga Si o No");
     if(eleccion==="Si"){
         alert("Usted escogió ingresar un curso, ahora debe introducir la información del curso");
         let nombre_curso = prompt("Indique el nombre del curso");
         let descripcion = prompt("Indique la descripcion del curso");
         let cantidad_participantes = Number(prompt("Indique la cantidad máxima de estudiantes"));
         let precio = parseInt(prompt("Indique el precio en dólares"));  
         //llamada a la función
         let precio_pesos_uruguayos=recalcularPrecio(precio);      
         alert(`Su curso costará ${precio_pesos_uruguayos} pesos uruguayos`);
     } 
     else{
         if(eleccion==="No"){
             alert("Usted escogió no ingresar un curso");
             variable_control=false;           
         }
         else{
         alert("Debe seleccionar una opción correcta");
         }
    }
}