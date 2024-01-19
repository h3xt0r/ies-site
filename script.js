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

document.getElementById('Soluciones').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('soluciones.html');
});

document.getElementById('Hardware').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('hardware.html');
});

document.getElementById('Financieros').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('finanzas/financieros.html');
});

document.getElementById('teoriaR').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('toc/toc.html');
});

document.getElementById('contacto').addEventListener('click', () => {
    cargarContenidoDesdeArchivo('contacto.html');
});
