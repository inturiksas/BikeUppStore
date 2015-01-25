windows.Cliente = Backbone.Model.extends({
	defaults: {
		"id":"",
		"cedula":"",
		"nombre":"",
		"direccion":"",
		"peso":"",
		"telefono":"",
		"email":""
	},
	initialized: function(){

	},
	//Metodos proios del modelo
	verificarCliente: function(){},
	getClienteTienda: function(){},
	addCliente: function(){},
	getClientesTienda: function(){}


});