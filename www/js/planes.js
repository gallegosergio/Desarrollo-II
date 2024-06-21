function buttonBack(){
    location.href = "menu.html";
}
document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'p_estacionamiento') {
      page.querySelector('#push-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('p_lavado.html');
      };
    }
    const parkingCheckboxes = document.querySelectorAll('.planA input[type="checkbox"], .planB input[type="checkbox"], .planC input[type="checkbox"]');
    parkingCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function(event) {
        if (event.target.checked) {
          const planId = event.target.id.replace('checkbox', 'popover_');
          document.getElementById(planId).show(event.target);
        } else {
          const planId = event.target.id.replace('checkbox', 'popover_');
          document.getElementById(planId).hide();
        }
      });
    });
    const carwashCheckboxes = document.querySelectorAll('.plan1 input[type="checkbox"], .plan2 input[type="checkbox"], .plan3 input[type="checkbox"], .plan4 input[type="checkbox"]');
    carwashCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function(event) {
            if (event.target.checked) {
                const planId = event.target.id.replace('checkbox', 'popover_');
                document.getElementById(planId).show(event.target);
            } else {
                const planId = event.target.id.replace('checkbox', 'popover_');
                document.getElementById(planId).hide();
            }
        });
    });
});
/* */
var showOnsPopoverA = function(target) {
  document
    .getElementById('popover_planA')
    .show(target);
};

var hideOnsPopoverA = function() {
  document
    .getElementById('popover_planA')
    .hide();
};
/* */  
var showOnsPopoverB = function(target) {
  document
    .getElementById('popover_planB')
    .show(target);
};

var hideOnsPopoverB = function() {
  document
    .getElementById('popover_planB')
    .hide();
};
/* */
var showOnsPopoverC = function(target) {
  document
    .getElementById('popover_planC')
    .show(target);
};

var hideOnsPopoverC = function() {
  document
    .getElementById('popover_planC')
    .hide();
};
/* */
var showOnsPopover1 = function(target) {
  document
    .getElementById('popover_plan1')
    .show(target);
};

var hideOnsPopover1 = function() {
  document
    .getElementById('popover_plan1')
    .hide();
};
/* */
var showOnsPopover2 = function(target) {
  document
    .getElementById('popover_plan2')
    .show(target);
};

var hideOnsPopover2 = function() {
  document
    .getElementById('popover_plan2')
    .hide();
};
/* */
var showOnsPopover3 = function(target) {
  document
    .getElementById('popover_plan3')
    .show(target);
};

var hideOnsPopover3 = function() {
  document
    .getElementById('popover_plan3')
    .hide();
};
/* */
var showOnsPopover4= function(target) {
  document
    .getElementById('popover_plan4')
    .show(target);
};

var hideOnsPopover4 = function() {
  document
    .getElementById('popover_plan4')
    .hide();
};
/* */
function selectPlan(checkbox) {
  const parkingCheckboxes = document.querySelectorAll('.planA input[type="checkbox"], .planB input[type="checkbox"], .planC input[type="checkbox"]');
  parkingCheckboxes.forEach(box => box.checked = box === checkbox);
}
function selectPlanCarWash(checkbox) {
  const carwashCheckboxes = document.querySelectorAll('.plan1 input[type="checkbox"], .plan2 input[type="checkbox"], .plan3 input[type="checkbox"], .plan4 input[type="checkbox"]');
  carwashCheckboxes.forEach(box => box.checked = box === checkbox);
}
function guardarPlanesEstacionamiento() {
  // Obtener el estado de los checkboxes
  var planMensual = document.querySelector('.checkbox_inputA').checked;
  var planSemanal = document.querySelector('.checkbox_inputB').checked;
  var planDiario = document.querySelector('.checkbox_inputC').checked;

    // Validar que al menos un plan esté seleccionado
    if (!planMensual && !planSemanal && !planDiario) {
      alert("Seleccione al menos un plan de estacionamiento antes de agregar.");
      return; // Detener la ejecución si no hay ningún plan seleccionado
  }

  const PplanMensual = 75000;
  const PplanSemanal = 18800;
  const PplanDiario = 2500;

  // Crear un objeto con los planes de estacionamiento
  var planes = {
      mensual: {
          seleccionado: planMensual,
          precio: PplanMensual
      },
      semanal: {
          seleccionado: planSemanal,
          precio: PplanSemanal
      },
      diario: {
          seleccionado: planDiario,
          precio: PplanDiario
      }
  };

  // Guardar los planes en el localStorage
  localStorage.setItem('planesEstacionamiento', JSON.stringify(planes));

  // Mostrar una alerta con el plan de estacionamiento seleccionado y su precio
  var mensajeAlerta = "Plan de estacionamiento seleccionado:\n";
  if (planMensual) {
      mensajeAlerta += "- Plan Mensual: $" + PplanMensual + "\n";
  }
  if (planSemanal) {
      mensajeAlerta += "- Plan Semanal: $" + PplanSemanal + "\n";
  }
  if (planDiario) {
      mensajeAlerta += "- Plan Diario: $" + PplanDiario + "\n";
  }
  alert(mensajeAlerta);
}

function guardarPlanesLavado() {
  // Obtener el estado de los checkboxes
  var planBasico = document.querySelector('.checkbox_input1').checked;
  var planCompleto = document.querySelector('.checkbox_input2').checked;
  var planPremium = document.querySelector('.checkbox_input3').checked;
  var planDetallado = document.querySelector('.checkbox_input4').checked;

      // Validar que al menos un plan esté seleccionado
      if (!planBasico && !planCompleto && !planPremium && !planDetallado) {
        alert("Seleccione al menos un plan de lavado antes de agregar.");
        return; // Detener la ejecución si no hay ningún plan seleccionado
    }
  
  // Precios de los planes de lavado
  const precioBasico = 15000;
  const precioCompleto = 30000;
  const precioPremium = 60000;
  const precioDetallado = 90000;

  // Obtener la hora y el día de recogida del vehículo
  var horaRecogida = document.querySelector('.input_horaL').value;
  var diaRecogida = document.querySelector('.input_dateL').value;

  // Crear un objeto con los planes de lavado
  var planesLavado = {
      basico: {
          seleccionado: planBasico,
          precio: precioBasico
      },
      completo: {
          seleccionado: planCompleto,
          precio: precioCompleto
      },
      premium: {
          seleccionado: planPremium,
          precio: precioPremium
      },
      detallado: {
          seleccionado: planDetallado,
          precio: precioDetallado
      }
  };

  // Guardar los planes de lavado en el localStorage
  localStorage.setItem('planesLavado', JSON.stringify(planesLavado));

  // Mostrar una alerta con los planes de lavado seleccionados y sus precios
  var mensajeAlerta = "Planes de lavado seleccionados:\n";
  if (planBasico) {
      mensajeAlerta += "- Plan Básico: $" + precioBasico + "\n";
  }
  if (planCompleto) {
      mensajeAlerta += "- Plan Completo: $" + precioCompleto + "\n";
  }
  if (planPremium) {
      mensajeAlerta += "- Plan Premium: $" + precioPremium + "\n";
  }
  if (planDetallado) {
      mensajeAlerta += "- Plan Detallado: $" + precioDetallado + "\n";
  }
  mensajeAlerta += "Su vehículo lo espera."+"\n";
  mensajeAlerta += "Día de recogida: " + diaRecogida + "\n";
  mensajeAlerta += "Hora de recogida: " + horaRecogida + "\n";
  alert(mensajeAlerta);
}

