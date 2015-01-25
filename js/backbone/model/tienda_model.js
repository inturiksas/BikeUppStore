window.Tienda = Backbone.Model.extends({
	defaults:{
		"id":"",
		"nit":"",
		"nombre":"",
		"telefono":"",
		"direccion":"",
		"estado":"",
		"login":"",
		"password":""
	},
	initialized: function(){

	},
	//Metodos proios del modelo
	crearTienda: function(tienda){

	},	
	consultarTiendas: function(){},
	verificarTienda: function(){},
	cambiarEstadoTienda: function(){}
	//URL del servicio JSON
	urlTienda:""
});


window.TiendaColeccion = Backbone.Collection.extends({

});