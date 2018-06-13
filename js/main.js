
var textarea = document.getElementById('textarea')
var capa_datos = document.getElementById('capa_datos')
var boton_submit = document.getElementById('boton_submit')
var boton_borrar = document.getElementById('boton_borrar')




boton_submit.addEventListener('click', insertar)
boton_borrar.addEventListener('click', borrar_todo)



if(localStorage.getItem('items') == null) // Si no hay items guardados
{
	localStorage.setItem('items', 0)
}


if(localStorage.getItem('cantidad') == null) // Si no hay items guardados
{
	localStorage.setItem('cantidad', 0)
}






function insertar()
{
	if(localStorage.getItem('cantidad') == null) // Tras borrar todo desaparecen los items
	{
		localStorage.setItem('cantidad', 0)
	}



	if(textarea.value != "" && textarea.value.trim())
	{
		var cifra = localStorage.getItem('cantidad') // Generador de id´s

		localStorage.setItem(cifra, textarea.value) // Insertar entrada

		var items = localStorage.getItem('items') // Contador de items
		localStorage.setItem('items', Number(items) + 1)




		var capa_entrada = document.createElement('div')
		var texto = document.createElement('p')

		capa_entrada.classList.add('capa_entrada')
		texto.classList.add('capa_texto')



		capa_entrada.appendChild(texto)

		var closeCross = new CloseCross(cifra)
		capa_entrada.appendChild(closeCross.crear())


		var close_cross = capa_entrada.children[1]
		close_cross.addEventListener('click', borrar_item)

		texto.innerHTML = textarea.value
		capa_datos.appendChild(capa_entrada)



		setTimeout(function()
		{
			capa_entrada.style.opacity = '1'
		}, 100)



		var incremento = Number(cifra) + 1
		localStorage.setItem('cantidad', incremento)


		textarea.value = ""


		foco()
	}
}




function cargar()
{
	var contador = 0


	for(var i=0; i <= localStorage.getItem('cantidad'); i++)
	{
		if(localStorage.getItem(contador) != null)
		{
			var capa_entrada = document.createElement('div')
			var texto = document.createElement('p')

			capa_entrada.classList.add('capa_entrada')
			texto.classList.add('capa_texto')

			

			capa_entrada.appendChild(texto)

			var closeCross = new CloseCross(contador)
			capa_entrada.appendChild(closeCross.crear())


			var close_cross = capa_entrada.children[1]
			close_cross.addEventListener('click', borrar_item)


			capa_datos.appendChild(capa_entrada)


			texto.innerHTML = localStorage.getItem(contador)
		}

		contador ++
	}
}
cargar()




function borrar_item()
{
	var id = this.id

	var close_cross = document.getElementById(id)

	close_cross.parentNode.style.opacity = '0'



	setTimeout(function()
	{
		close_cross.parentNode.parentNode.removeChild(close_cross.parentNode)
	}, 500)

	

	localStorage.removeItem(id)


	var items = localStorage.getItem('items') // Contador de items
	localStorage.setItem('items', Number(items) - 1)



	resetear_cantidad()
	foco()
}




function borrar_todo()
{
	var entradas = capa_datos.getElementsByClassName('capa_entrada')

	for(var i=0; i < entradas.length; i++)
	{
		entradas[i].style.opacity = '0'
	}

	setTimeout(function()
	{
		capa_datos.innerHTML = ""
	}, 500)
	
	localStorage.clear()
	resetear_cantidad()
	foco()
}




function resetear_cantidad()
{
	if(localStorage.getItem('items') == 0)
	{
		localStorage.setItem('cantidad', 0)
		localStorage.setItem('items', 0)
	}
}




function foco()
{
	textarea.focus();
}
foco()







function fade_cargar()
{
	var entradas = capa_datos.getElementsByClassName('capa_entrada')
	var i = 0

	var timer = setInterval(function()
	{
		if(entradas[i] != undefined)
		{
			entradas[i].style.opacity = '1'
			i ++
		}
		else
		{
			clearInterval(timer)
		}
	}, 100)
}
fade_cargar()






function PulsarTecla(event) 
{
	var tecla = event.keyCode;

	if(tecla == 13 && textarea.value != "")
	{
		event.preventDefault()
		insertar();
	}
}

window.onkeyup = PulsarTecla;


