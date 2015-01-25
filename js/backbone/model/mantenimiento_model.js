window.Mantenimiento = Backbone.Model.extends({
	defaults:{
		"id":"",
		"estado":"",
		"fecha_ingreso":"",
		"fecha_salida":"",
		"recibido_por":"",
		"val_mano_obra":"",
		"tienda":"",
		"cliente":"",
		"articulo":"",
		"man_preventivo":"",
		"man_general":"",
		"man_susdel_gen":"",
		"man_susdel_pp":"",
		"man_susdel_cor":"",
		"man_sustra_gen":"",
		"man_sustra_pp":"",
		"man_sustra_cor":"",
		"man_bujes":"",
		"pieza":"",
		"tot_partes":"",
		"tot_mantenimiento":"",
		"total":""

	},
	initialized: function(){

	},
	//Metodos proios del modelo
	saveRegistro: function(){},
	cerrarRegistro: function(){}
});