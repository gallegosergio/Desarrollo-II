function buttonBack(){
    location.href = "menu.html";
}
function registrarVehiculo() {
    // Obtener los valores de los campos de entrada
    var tipoVehiculo = document.querySelector('.cont_t_vehi input').value;
    var propietario = document.querySelector('.cont_prop input').value;
    var identificacion = document.querySelector('.cont_cc input').value;
    var placas = document.querySelector('.cont_placas input').value;
    var fechaIngreso = document.querySelector('.cont_f_ingreso input').value;
    var telefono = document.querySelector('.cont_phone input').value;

    // Crear un objeto con los datos del vehículo
    var vehiculo = {
        tipo: tipoVehiculo,
        propietario: propietario,
        identificacion: identificacion,
        placas: placas,
        fechaIngreso: fechaIngreso,
        telefono: telefono
    };

    // Guardar los datos del vehículo en el almacenamiento local
    localStorage.setItem('Tipo', tipoVehiculo);
    localStorage.setItem('Propietario', propietario);
    localStorage.setItem('Identificación', identificacion);
    localStorage.setItem('Placas', placas);
    localStorage.setItem('Fecha de Ingreso', fechaIngreso);
    localStorage.setItem('Teléfono', telefono);

    // Mostrar el objeto vehículo en la consola
    console.log(vehiculo);
}


