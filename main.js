let variable_control=true;

/*===============================================================================*/
/*=============F U N C I O N E S ================================================*/
/*===============================================================================*/

/* PRECIO EN PESOS URUGUAYOS */
function recalcularPrecio(precio){
    return precio*40;
}

/* OBJETO */
function Curso(pnombre_curso, pdescripcion, pcantidad_participantes, pprecio_dolares, pprecio_pesos_uruguayos, piva, pprecio_total){
    this.nombre_curso = pnombre_curso,
    this.descripcion = pdescripcion,
    this.cantidad_participantes = pcantidad_participantes,
    this.precio_dolares = pprecio_dolares,
    this.precio_pesos_uruguayos = pprecio_pesos_uruguayos,
    this.iva = piva,
    this.precio_total = pprecio_total
}

/* ARREGLO */

const listado_cursos=[];

/* CÁLCULOS */

const iva =(precio_pesos_uruguayos)=>0.22*(precio_pesos_uruguayos);
const precio_total = (precio, iva)=>(precio+iva);
 
/* CICLO, CONDICIONALES, LLAMADA A FUNCIONES */

 while (variable_control) {
     let eleccion = prompt("Desea ingresar un curso? Diga Si o No").toLowerCase();

     if(eleccion === "si"){
         alert("Usted escogió ingresar un curso, ahora debe introducir la información del curso");
         let pnombre_curso = prompt("Indique el nombre del curso");
         let pdescripcion = prompt("Indique la descripcion del curso");
         let pcantidad_participantes = Number(prompt("Indique la cantidad máxima de estudiantes"));
         let pprecio = parseInt(prompt("Indique el precio en dólares"));  

         /* LLAMADAS A FUNCIONES */

         let precio_pesos_uruguayos=recalcularPrecio(pprecio); 
         let el_iva = iva(precio_pesos_uruguayos);
         let el_precio_total = precio_total(precio_pesos_uruguayos, el_iva);

         /* CONSTRUCCION DEL OBJETO*/

        const el_curso= new Curso(pnombre_curso, pdescripcion, pcantidad_participantes, pprecio, precio_pesos_uruguayos, el_iva, el_precio_total);

        /* INSERCIÓN DEL OBJETO EN EL ARREGLO*/

        listado_cursos.push(el_curso);

         alert(`Su curso costará ${precio_pesos_uruguayos} pesos uruguayos + ${el_iva} pesos de IVA por lo que el precio Total será ${el_precio_total}`);
     } 
     else{
         if(eleccion==="no"){
             alert("Usted escogió no ingresar un curso");
             variable_control=false; 
             alert(`Ahora se le muestran los cursos insertados`)

             /* VARIABLE DE CONTROL */
             let indice = 0;

             /* VARIABLE A MOSTRAR */
             let contenido_del_arreglo = "";

             /* ITERANDO EL ARREGLO*/

            listado_cursos.forEach(element => {
                contenido_del_arreglo += (`CURSO ${indice+1}: \n Nombre del curso: ${element.nombre_curso} \n Descripción del curso: ${element.descripcion} \n Cantidad de participantes: ${element.cantidad_participantes} \n Precio en dólares: ${element.precio_dolares} \n Precio en pesos uruguayos: ${element.precio_pesos_uruguayos} \n Iva a pagar: ${element.iva} \n Precio Total del curso: ${element.precio_total} \n \n`);       
                indice++;        
             }); 

             alert(contenido_del_arreglo);
         }
         else{
         alert("Debe seleccionar una opción correcta");
         }
    }
}