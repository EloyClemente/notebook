
var CloseCross = function(id)
{
	this.id = id

	this.crear = function()
	{
		var capa = document.createElement('div')
		var aspa_1 = document.createElement('div')
		var aspa_2 = document.createElement('div')

		capa.classList.add('closeCross_capa')
		aspa_1.classList.add('closeCross_aspa_1')
		aspa_2.classList.add('closeCross_aspa_2')

		capa.appendChild(aspa_1)
		capa.appendChild(aspa_2)

		capa.id = this.id

		return capa
	}
}
