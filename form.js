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

    /*validaciones*/
    if (nombre.value.trim() === '' || !nombreExp.test(nombre.value) || nombre.value.length > 30) {
        document.getElementById('errorNombre').style.display = 'inline';
        nombre.value = "";
        valid = false;
    } else {
        document.getElementById('errorNombre').style.display = 'none';
    }


    if (apellido.value.trim() === '' || !apellidoExp.test(apellido.value) || apellido.value.length > 30) {
        document.getElementById('errorApellido').style.display = 'inline';
        apellido.value = "";
        valid = false;
    } else {
        document.getElementById('errorApellido').style.display = 'none';
    }

    if (!telefonoExp.test(telefono.value) || telefono.value.trim() === "") {
        document.getElementById('errorTelefono').style.display = 'inline';
        telefono.value = "";
        valid = false;
    } else {
        document.getElementById('errorTelefono').style.display = 'none';
    }
    const longitudActual = descripcion.value.length;
    if (longitudActual > maxLength || longitudActual < 30) {
        document.getElementById('errorDescripcion').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('errorDescripcion').style.display = 'none';
    }



    if (correo.value.trim() === "" || !emailExp.test(correo.value)) {
        document.getElementById('errorEmail').style.display = 'inline';
        correo.value = "";
        valid = false;
    } else {
        document.getElementById('errorEmail').style.display = 'none';
    }


    if (valid) {
        confirmarEnvio(nombre.value, apellido.value, telefono.value, descripcion.value, correo.value);
        alert("Formulario enviado correctamente");
        formulario.reset();
        document.getElementById("divCreado").style.display = 'block';
        contador.textContent = "";
        botonEnviar.disabled = true;
        botonEnviar.textContent = 'Enviado';
        botonEnviar.style.backgroundColor = "#455741";

    }
});


function confirmarEnvio(nombre, apellido, telefono, descripcion, correo) {
    const reseñasDiv = document.getElementById("divCreado")
    const reseñaDiv = document.createElement('div');
    let idPieza;

    reseñaDiv.classList.add('divCreado');


    /*Si viene de elegir una pieza o directamente del formulario que mensaje entrega al enviar form*/
    const params = new URLSearchParams(window.location.search);
    idPieza = params.get('id');

    if (idPieza) {

        reseñaDiv.innerHTML =
            `<p id="textoDiv"> ${nombre} ${apellido} Gracias por ponerte en contacto con "Ceramica DM".   
            En breve nos comunicaremos al ${telefono} o bien al correo ${correo}. Pieza de interes con ID = ${idPieza}</p>`;
    } else {
        reseñaDiv.innerHTML =
            `<p id="textoDiv"> ${nombre} ${apellido} Gracias por ponerte en contacto con "Ceramica DM".   
            En breve nos comunicaremos al ${telefono} o bien al correo ${correo}.</p>`;
    }

    reseñasDiv.appendChild(reseñaDiv);
}

descripcion.addEventListener('input', function () {
    const longitud = descripcion.value.length;
    const caracteresRestantes = maxLength - longitud;
    contador.textContent = `${caracteresRestantes}/${maxLength} caracteres`;

    if (longitud > maxLength) {
        document.getElementById('errorDescripcion').style.display = 'inline';
    } else {
        document.getElementById('errorDescripcion').style.display = 'none';
    }
});
