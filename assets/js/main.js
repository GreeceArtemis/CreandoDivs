var people=[ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];
 function mensaje(n,a,r,c){
   return "<li>Nombre: "+n+"</li><li>Apellido: "+a+"</li><li>Rol: "+r+"</li><li>Cumpleaños: "+c+"</li>";
   }
 var mensajeTotal="";
 people.map(function(e,i){
   mensajeTotal+=("<div>"+mensaje(e.nombre,e.apellido,e.rol,e.cumpleanios)+"</div><br>");

   });
   document.getElementById("datos").innerHTML=mensajeTotal;
