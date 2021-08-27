//Recibe como parámetro el botón
function ponerValor(boton) {
	//Busca en el documento html el div con Id = inputwindow y le asigna el valor 
	//del botón. Para obtener el valor del botón se usa su propiedad "value"
	document.getElementById('inputwindow').value += boton.value;
}

function borrarPantalla(y) {
	//Busca en el documento html el div con Id = inputwindow y le asigna el valor vacío
	document.getElementById('inputwindow').value = '';
}

function calcularResultado() {
	//Busca en el documento html el div con Id = inputwindow y obtiene su valor
	//El valor obtenido se lo asigna a la variable "operacion"
	var operacion = document.getElementById('inputwindow').value;
	
	//Se le asigna a la variable "resultado" el cálculo de la operación 
	//En javascript se puede obtener el valor de una expresión de cálculo con
	//la función eval. Por ejemplo: val resultado = eval("12+3");
	var resultado = eval(operacion);
	
	//Busca en el documento html el div con Id = inputwindow y le asigna el 
	//valor de la varialbe "resultado"
	document.getElementById('inputwindow').value = resultado;
}