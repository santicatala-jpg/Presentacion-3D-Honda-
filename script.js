// JavaScript Document// Elementos del DOM
// Usamos 'var' en lugar de 'const' para que tu editor no marque error
var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modal-title');
var modalBody = document.getElementById('modal-body');

// Función para abrir el modal
// El editor puede decir que "no se usa", pero sí se usa en el HTML (onclick)
function openModal(type) {
    // Verificación de seguridad
    if (!modal) return;
    
    modal.classList.add('active'); 
    
    var viewerHTML = '';
    
    // Configuración para el visualizador (rotación y controles)
    var viewerAttributes = 'auto-rotate camera-controls shadow-intensity="1" ar';

    if (type === 'STAND') {
        modalTitle.innerText = 'Visualización 3D: STAND';
        // Concatenamos con '+' para máxima compatibilidad
        viewerHTML = '<model-viewer src="STAND.glb" alt="Modelo 3D del Stand" ' + viewerAttributes + ' style="width: 100%; height: 100%;"></model-viewer>';
    } else if (type === 'MATERIAL POP') {
        modalTitle.innerText = 'Visualización 3D: MATERIAL POP (Folletero)';
        viewerHTML = '<model-viewer src="folletero.glb" alt="Modelo 3D del Folletero" ' + viewerAttributes + ' style="width: 100%; height: 100%;"></model-viewer>';
    }

    modalBody.innerHTML = viewerHTML;
}

// Función para cerrar el modal
function closeModal() {
    if (!modal) return;
    
    modal.classList.remove('active'); 
    
    // Esperamos 300ms para limpiar el contenido y ahorrar memoria
    setTimeout(function() {
         modalBody.innerHTML = ''; 
    }, 300); 
}

// Cerrar si se hace click fuera de la caja
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};