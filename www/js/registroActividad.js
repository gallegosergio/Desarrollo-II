function buttonBack() {
    location.href = "menu.html";
}

document.addEventListener('DOMContentLoaded', function() {
    // Cargar planes de estacionamiento y lavado al cargar la página
    cargarPlanesEstacionamiento();
    cargarPlanesLavado();
});

function cargarPlanesEstacionamiento() {
    var planesEstacionamiento = JSON.parse(localStorage.getItem('planesEstacionamiento'));
    if (!planesEstacionamiento) return;

    var mensaje = "Plan de estacionamiento seleccionado:\n";
    if (planesEstacionamiento.mensual.seleccionado) {
        mensaje += "- Plan Mensual: $" + planesEstacionamiento.mensual.precio + "\n";
    }
    if (planesEstacionamiento.semanal.seleccionado) {
        mensaje += "- Plan Semanal: $" + planesEstacionamiento.semanal.precio + "\n";
    }
    if (planesEstacionamiento.diario.seleccionado) {
        mensaje += "- Plan Diario: $" + planesEstacionamiento.diario.precio + "\n";
    }

    actualizarActividad(mensaje);
}

function cargarPlanesLavado() {
    var planesLavado = JSON.parse(localStorage.getItem('planesLavado'));
    if (!planesLavado) return;

    var mensaje = "Planes de lavado seleccionados:\n";
    if (planesLavado.basico.seleccionado) {
        mensaje += "- Plan Básico: $" + planesLavado.basico.precio + "\n";
    }
    if (planesLavado.completo.seleccionado) {
        mensaje += "- Plan Completo: $" + planesLavado.completo.precio + "\n";
    }
    if (planesLavado.premium.seleccionado) {
        mensaje += "- Plan Premium: $" + planesLavado.premium.precio + "\n";
    }
    if (planesLavado.detallado.seleccionado) {
        mensaje += "- Plan Detallado: $" + planesLavado.detallado.precio + "\n";
    }

    actualizarActividad(mensaje);
}

function actualizarActividad(mensaje) {
    var textarea = document.getElementById('actividad');
    textarea.value += mensaje + "\n";
}
