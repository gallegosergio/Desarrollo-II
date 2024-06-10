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

  console.log('Planes de estacionamiento guardados:', planes);
}
