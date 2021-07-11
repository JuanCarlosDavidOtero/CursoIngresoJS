function mostrar()
{
	var parejaA;
	var ParejaB;
	var pesoA;
	var pesoB;
	parejaA = prompt ("Ingrese el nombre del novio");
	ParejaB = prompt ("Ingrese el nombre de la novia");
	pesoA = prompt ("Ingrese el peso de " + parejaA);
	pesoB = prompt ("Ingrese el peso de " + ParejaB);
	pesoA=parseInt(pesoA);
	pesoB=parseInt(pesoB);
	var pesopromedio;
	pesopromedio = ((pesoA + pesoB) / 2 );
	alert("ustedes se llaman " +parejaA+ " y " + ParejaB +" pesan " + pesoA + " y " + pesoB + " kilos, que sumados son " + (pesonovio + pesonovia) + " kilos y el promedio de peso es " + pesopromedio);
	  
}