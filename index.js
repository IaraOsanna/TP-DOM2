 //1)
 let respuesta;
 
 let B=document.querySelector("#Boton")
 
 
 B.onclick= function () {
   
     respuesta = document.querySelector("input").value;
 
     if (respuesta == "¿Como estas?") {
         alert("Bien y vos?");
     } else {
         alert("No entiendo la pregunta");
     }
 }
 
 //2)
 
 let arreglo = [];
 let alumnos;
 let p = document.querySelector("p");
 let Bu = document.querySelector("#Bu");
 
 U.onclick = function() {
     alumnos = document.querySelector("#In").value;
 
     
     if (arreglo.length < 10) {
         arreglo.push(alumnos);
         p.textContent = alumnos
     }
   
 }

 