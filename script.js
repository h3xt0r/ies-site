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

function agregarEventos(elementoId, archivo) {
    const elemento = document.getElementById(elementoId);
    
    function cargarContenido() {
        cargarContenidoDesdeArchivo(archivo);
    }

    // Agregar los eventos 'click' y 'touchstart'
    elemento.addEventListener('click', cargarContenido);
    elemento.addEventListener('touchstart', cargarContenido);
}

agregarEventos('Soluciones', 'soluciones.html');
agregarEventos('Hardware', 'hardware.html');
agregarEventos('Financieros', 'finanzas/financieros.html');
agregarEventos('teoriaR', 'toc/toc.html');
agregarEventos('contacto', 'contacto.html');

// document.getElementById('Soluciones').addEventListener('click', () => {
//     cargarContenidoDesdeArchivo('soluciones.html');
// });

// document.getElementById('Soluciones').addEventListener('touchcancel', () => {
//     cargarContenidoDesdeArchivo('soluciones.html');
// })

// document.getElementById('Hardware').addEventListener('click', () => {
//     cargarContenidoDesdeArchivo('hardware.html');
// });

// document.getElementById('Financieros').addEventListener('click', () => {
//     cargarContenidoDesdeArchivo('finanzas/financieros.html');
// });

// document.getElementById('teoriaR').addEventListener('click', () => {
//     cargarContenidoDesdeArchivo('toc/toc.html');
// });

// document.getElementById('contacto').addEventListener('click', () => {
//     cargarContenidoDesdeArchivo('contacto.html');
// });
