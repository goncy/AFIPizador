// abreActividad polyfill
function abre_actividad()
{
 if (parseInt(form1.cantact.value) > 3)
   {
     window.alert("La cantidad ingresada debe ser un número");
     form1.cantact.focus();
     return;
   }
 if ((parseInt(form1.cantact.value) < 1) || (form1.cantact.value == ''))
   {
     window.alert("Error la cantidad de actividades no corresponde.");
     form1.cantact.focus(); 
     tract1.style.display    ='none';
     tract2.style.display    ='none';
     tract3.style.display    ='none';  
     return;
   }
 if (form1.cantact.value == "1")
   {
      //window.alert("LLEGO ABREACTIVIDADES");
     //form1.act1.value='';
     tract1.style.display    ='';
     tract2.style.display    ='none';
     tract3.style.display    ='none';
   } 
 if (form1.cantact.value == "2")
   { 
     //form1.act1.value='';
     //form1.act2.value='';
     tract1.style.display    ='';
     tract2.style.display    ='';  
     tract3.style.display    ='none';
   }
 if (form1.cantact.value == "3")
   {
     //form1.act1.value='';
     //form1.act2.value='';
     //form1.act3.value='';
     tract1.style.display    ='';
     tract2.style.display    ='';
     tract3.style.display    ='';      
   }
 }