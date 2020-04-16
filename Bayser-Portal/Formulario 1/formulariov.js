document.addEventListener("DOMContentLoaded", init_page);


var cvacia= /^\s*$/; 
var cletras= /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
var ccorreo=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
function init_page(){

var form = document.getElementById("fcot");
form.addEventListener("submit", form_submit);

}


function form_submit(e){
    e.preventDefault();
    e.stopPropagation();

var clientename = document.getElementById("clientename"); 
var clientecorreo = document.getElementById("clientecorreo");

var focuse = null;
var tieneerror = false;
var errors = {};



/*validar nombre*/ 
if(cvacia.test(clientename.value)){

clientename.className=" error";

tieneerror=true;

        if(errors["errornom"]){
        errors["errornom"].push("No puede dejar sin nombre el formulario.");
        }
        else{
            errors["errornom"]=["No puede dejar sin nombre el formulario."];

            }

    if(!focuse){
        focuse=clientename;
    }        



}

if(!cletras.test(clientename.value)){

    clientename.className=" error";
    tieneerror=true;
    
            if(errors["errornom"]){
            errors["errornom"].push("Formato Incorrecto del nombre.");
            }
            else{
                errors["errornom"]=["Formato Incorrecto del nombre."];
    
                }

                if(!focuse){
                    focuse=clientename;
                }           
                
    }

/*validar correo*/

    if(cvacia.test(clientecorreo.value)){

        clientecorreo.className= " error";
        tieneerror=true;
    
        if(errors["errorcorre"]){
            errors["errorcorre"].push("No puede dejar sin correo el formulario");
            }
            else{
                errors["errorcorre"]=["No puede dejar sin correo el formulario"];
    
                }
    
                if(!focuse){
                    focuse=clientecorreo;
                }    
    
    }

if(!ccorreo.test(clientecorreo.value)){

    clientecorreo.className= " error";
    tieneerror=true;

    if(errors["errorcorre"]){
        errors["errorcorre"].push("Formato Incorrecto del correo.");
        }
        else{
            errors["errorcorre"]=["Formato Incorrecto del correo."];

            }

            if(!focuse){
                focuse=clientecorreo;
            }    

}





/* esto focusea */
if(tieneerror){

    for( var i in errors){

        var mensaje = errors[i].join("</br>");
        document.getElementById(i).innerHTML="<br/>"+mensaje;
    }
    focuse.focus();
    return false;
}
else{
    this.submit();
    alert("Su Cotización fue Enviada Exitosamente");
    return true;
}


}