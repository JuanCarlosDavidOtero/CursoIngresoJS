/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	sueldo = txtIdImporte.value;
	sueldo = parseInt(sueldo);
	resultado = (sueldo * 0.75 );
	document.getElementById("txtIdResultado").value = (resultado);
}



/*Codigo del Ejerciocio 10BIS

function mostrarAumento()
{
	var sueldo;
	var resultado;
	var descuento;
	sueldo = txtIdImporte.value;
	descuento = prompt ("Ingrese descuento");
	sueldo = parseInt(sueldo);
	resultado = (sueldo - (sueldo / 100 * descuento));
	document.getElementById("txtIdResultado").value = (resultado);
}
*/