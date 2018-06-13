
// INSTRUCCIONES
// Asignar la clase light-effect
// a cualquier elemento que contenga texto.
//.........................................

var color_1 = '#304ffe'      // Color de fuente
var color_2  = '#FF004D'   // Color on hover

function light_effect()
{
	var element = document.getElementsByClassName('light-effect')
   
	var espaciado      = 1           // Pixels de espacio entre palabras (spans vacíos)
	var letter_spacing = 0           // Espacio entre letras


	for(var i=0; i < element.length; i++)   // Buscar todos los elementos con la clase light-effect
	{
		var texto = element[i].innerHTML  // Localizamos el texto del enlace
		element[i].innerHTML = ""         // Borramos el texto
		letras(texto, i)
	}


	function letras(texto, i)
	{
		for(var x=0; x < texto.length; x++) // Recorremos las letras
		{
			var span = document.createElement('span') // Creamos un span para cada letra

			span.style.color = color_1 // Color de fuente
			span.style.letterSpacing = letter_spacing + 'px' // Separación de las letras


			if(texto[x] == " ")
			span.style.width = espaciado + 'px' // Pixels de espacio entre palabras (spans vacíos)
			

			span.innerHTML = texto[x] // Insertamos cada letra en un span

			element[i].appendChild(span) // Insertamos los spans en la capa padre

			element[i].addEventListener('mouseenter', color) // Asignamos el evento
			element[i].addEventListener('mouseleave', color)
		}	
	}
}
light_effect()






function color(event)
{
	var spans = this.getElementsByTagName('span') // Localizamos los spans
	var contSpans = 0

	var that = this


	var execute = setInterval(function()
	{
		spans[contSpans].style.transition = "all, .3s"


		if(event.type == 'mouseenter') // Colorear en función del tipo de evento
		{
			spans[contSpans].style.color = color_2
		}
		
		else
		{
			spans[contSpans].style.color = color_1	
		}
		

		
		contSpans++


		if(contSpans == spans.length) // Si se han recorrido todas las letras
		clearInterval(execute) // Detener
		
	}, 40)	
}


























































