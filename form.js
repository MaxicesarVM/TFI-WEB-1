const nombre = document.getElementById('nombre');  
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const descripcion = document.getElementById('descripcion');
const correo = document.getElementById('correo');  
const formulario = document.getElementById('formulario');
const obtenerID = document.getElementById('obtenerID'); 
const contador = document.getElementById('contador');
const maxLength = 700;
const botonEnviar = document.getElementById('enviar');

 
formulario.addEventListener('submit', function (e) {  
    e.preventDefault();  
    let valid = true;  
    const telefonoExp = /^(?!15)(?!0)\d{6,10}$/;
    const apellidoExp = /^[a-zA-ZÀ-ÿ\s]+$/;
    const nombreExp = /^[a-zA-ZÀ-ÿ\s]+$/;
    const emailExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 

    // Validación del nombre  
    if (nombre.value.trim() === '' || !nombreExp.test(nombre.value) || nombre.value.length > 30) {  
        document.getElementById('errorNombre').style.display = 'inline'; 
        nombre.value = ""; 
        valid = false;  
    } else {  
        document.getElementById('errorNombre').style.display = 'none';  
    }  

    // Validación del apellido  
    if (apellido.value.trim() === '' || !apellidoExp.test(apellido.value) || apellido.value.length > 30) {  
        document.getElementById('errorApellido').style.display = 'inline';  
        apellido.value = "";
        valid = false;  
    } else {  
        document.getElementById('errorApellido').style.display = 'none';  
    }  

    if (!telefonoExp.test(telefono.value) || telefono.value.trim() === "" ) {  
        document.getElementById('errorTelefono').style.display = 'inline';  
        telefono.value = "";
        valid = false;  
    } else {  
        document.getElementById('errorTelefono').style.display = 'none';  
    }  
     // Validación de la descripción
     const longitudActual = descripcion.value.length;
     if (longitudActual> maxLength || longitudActual<100) {
         document.getElementById('errorDescripcion').style.display = 'inline'; 
         valid = false;  
     } else {
         document.getElementById('errorDescripcion').style.display = 'none';  
     }
    
    // Validación del correo  
     
    if (correo.value.trim() === "" || !emailExp.test(correo.value)) {  
        document.getElementById('errorEmail').style.display = 'inline'; 
        correo.value = ""; 
        valid = false;  
    } else {  
        document.getElementById('errorEmail').style.display = 'none';  
    }  

    // Si todos son válidos, enviar el formulario  
    if (valid) {  
        confirmarEnvio(nombre.value, apellido.value, telefono.value, descripcion.value, correo.value);  
        alert("Formulario enviado correctamente");
        formulario.reset();  
        document.getElementById("divCreado").style.display = 'block'; 
        contador.textContent = ""; // Reiniciar el contador 
        botonEnviar.disabled = true;
        botonEnviar.textContent = 'Enviado';
        botonEnviar.style.backgroundColor = "#455741";
        
    }  
});  

// Confirmar envío de datos  
function confirmarEnvio(nombre, apellido, telefono,descripcion, correo) {  
    const reseñasDiv = document.getElementById("divCreado")  
    const reseñaDiv = document.createElement('div');  
    let idTorta;

    reseñaDiv.classList.add('divCreado'); 
    //obtener ID Torta
    const params = new URLSearchParams(window.location.search);
    idTorta = params.get('id');

    if (idTorta) {

        reseñaDiv.innerHTML = 
            `<p id="textoDiv"> ${nombre} ${apellido} Gracias por ponerte en contacto con "TortasAmanda".   
            En breve nos comunicaremos al ${telefono} o bien al correo ${correo}. Torta de interes con ID = ${idTorta}</p>`;
    }  else{
        reseñaDiv.innerHTML = 
            `<p id="textoDiv"> ${nombre} ${apellido} Gracias por ponerte en contacto con "TortasAmanda".   
            En breve nos comunicaremos al ${telefono} o bien al correo ${correo}.</p>`;
    }

    reseñasDiv.appendChild(reseñaDiv);  
}

descripcion.addEventListener('input', function() {
    const longitud = descripcion.value.length; // Obtener longitud actual
    const caracteresRestantes = maxLength - longitud; // Calcular caracteres restantes
    contador.textContent = `${caracteresRestantes}/${maxLength} caracteres`; // Actualiza el contador

    if (longitud > maxLength) {
        document.getElementById('errorDescripcion').style.display = 'inline';
    } else {
        document.getElementById('errorDescripcion').style.display = 'none';
    }
});
