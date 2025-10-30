function buscaPieza() {
    const tipo = document.getElementById('tipo').value;

    const PiezaFiltro = [];

    for (let i = 0; i < piezas.length; i++) {
        let confirmacion = true; 
        const pieza = piezas[i];

        if (tipo !== 'todo' && pieza.tipo !== tipo) {
            confirmacion = false;
        }


        
        if (confirmacion) {
            PiezaFiltro.push(pieza);
        }
    }

    mostrarPiezas(PiezaFiltro);
}


function mostrarPiezas(piezasmostradas) {
    const piezaContainer = document.getElementById('piezaContainer');
    piezaContainer.innerHTML = '';

    for (let i = 0; i < piezasmostradas.length; i++) {
        const pieza = piezasmostradas[i];  // para obtener la pieza actual

        const piezaElement = document.createElement('div');
        piezaElement.classList.add('Seleccionador');

        piezaElement.innerHTML = `
            <img src="${pieza.img}" alt="${pieza.nombre}">
            <h3>${pieza.nombre}</h3>
            <p>Descripcion: ${pieza.descripcion}</p>
            <p>Precio: $${pieza.precio}</p>
            <button class="orden_button" onclick="llamarFormulario(${pieza.id})">hace tu consulta</button>
        
        `;
        piezaContainer.appendChild(piezaElement);
    }
}



function llamarFormulario(id = null) {
    let url = "./contacto.html"
    if (id)
        url += `?id=${id}`
    window.location.href = url;
}


mostrarPiezas(piezas);