

function sumar(id, id2){
	var elemento = document.getElementById(id);
	var texto = elemento.innerHTML;
	var elemento2 = document.getElementById(id2).innerHTML;
	var numeros = texto.split("+");
	var resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
	
    document.getElementById(id2).innerHTML = " = " + resultado.toString();
    document.getElementById("pepe").style.visibility="hidden"	
}





