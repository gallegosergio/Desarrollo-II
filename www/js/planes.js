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