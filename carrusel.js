// Código para cargar el carrusel
const imagenesCeramica = [
    "./imagenes carrousel/setmate.jpg",
    "./imagenes carrousel/chopcervecero.jpg", 
    "./imagenes carrousel/Compotera.jpg",
    "./imagenes carrousel/setboul.jpg",
    "./imagenes carrousel/tazahongo.jpeg", 
    "./imagenes carrousel/tazasFlores.jpg",
    "./imagenes carrousel/tetera.jpg"
    
];


let indice = 0;

// Actualiza 
function actualizar() {
    document.getElementById("imagen").src = imagenesCeramica[indice];
}
function next() {
    indice = (indice + 1) % imagenesCeramica.length; // cuando sean iguales reinicia
    actualizar(); 
}

// Muestra la imagen anterior
function back() {
    if (indice === 0) {
        indice = imagenesCeramica.length - 1;
    } else {
        indice--;
    }
    document.getElementById("imagen").src = imagenesCeramica[indice];
}
   
actualizar();