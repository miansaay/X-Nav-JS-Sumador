function sumar(id, id2){
	var elemento = document.getElementById(id);
	var texto = elemento.innerHTML;
	var elemento2 = document.getElementById(id2).innerHTML;
	var numeros = texto.split("+");
	var resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
	
    document.getElementById(id2).innerHTML = " = " + resultado.toString();
}

function random(id1, id2){
	var elemento = document.getElementById(id1).innerHTML;
	var numero1 = Math.floor((Math.random() * 10000) + 1); 
	var numero2 = Math.floor((Math.random() * 10000) + 1); 
	document.getElementById(id1).innerHTML = numero1.toString() + "+" + numero2.toString();
        document.getElementById(id2).innerHTML = "";	
}
