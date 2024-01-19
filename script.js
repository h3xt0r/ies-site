function cargarContenidoDesdeArchivo(archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
        });
}

document.getElementById('quienesSomos').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('quienes_somos.html');
});

document.getElementById('queHacemos').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('que_hacemos.html');
});

document.getElementById('comoLoHacemos').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('como_lo_hacemos.html');
});

document.getElementById('porqueDiferentes').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('porque_diferentes.html');
});
