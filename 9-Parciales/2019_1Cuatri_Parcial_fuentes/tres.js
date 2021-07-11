function mostrar()
{
	var precioOriginal
	var descuento
	precioOriginal=prompt("Ingrese el valor original del producto");
	descuento=prompt("Ingrese el porcentaje de descuento");
	document.getElementById("elPrecioFinal").value = (precioOriginal - (precioOriginal / 100 * descuento));


}
