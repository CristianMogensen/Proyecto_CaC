console.log("Proyecto Final del curso de Desarrollo FullStack NodeJS de CodoACodo.");
console.log("Este sitio es totalmente ficticio, con fines educativos y no comerciales.");

//Validacion del formulario
function validacionFormulario(event){
    event.preventDefault();

    //Inputs
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let mail=document.getElementById("mail").value;

    if(nombre.trim()===""){
        alert("Por favor, Ingrese su nombre");
        return false;
    }
    if(apellido.trim()===""){
        alert("Por favor, Ingrese su apellido");
        return false;
    }
    if(mail.trim()===""){
        alert("Por favor, Ingrese su mail");
        return true;
    }
    if(!isValidEmail(mail))
        {
          alert("Por favor ingresa un MAIL VALIDO");
          return true;
        }
      
      function isValidEmail(mail)
      {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        return emailRegex.test(mail);
      }
        alert("Formulario enviado correctamente");
        return true;
      
} 
document.getElementById("formulario").addEventListener("submit", validacionFormulario);