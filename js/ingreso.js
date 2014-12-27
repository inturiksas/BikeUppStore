$(document).ready(function(){

	/* Para la gestión de Adición y retiro de Partes */
 	var MaxInputs       = 1000; //maximum input boxes allowed
    var InputsWrapper   = $("#InputsWrapper"); //Input boxes wrapper ID
    var AddButton       = $("#AddMoreFileBox"); //Add button ID
    var QuiButton       = $("#QuiMoreFileBox"); //Qui button ID

    var x = InputsWrapper.length; //initlal text box count
    var FieldCount=1; //to keep track of text box added
    var idPieza = undefined;//identificador de la pieza
    var codigoPieza = undefined;//Código de la pieza
    var nombrePieza = undefined;//Nombre de la pieza
    var precioPieza = undefined;//Precio de la pieza

    var Request = new function () {
        /// <summary>
        /// Obtiene parámetros de distintas fuentes.
        /// </summary>
        var params = [];
        var query = window.location.search.substring(1);
        query = unescape(query);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            params[pair[0]] = pair[1];
        }

        /// <summary>
        /// Obtiene los parámetros desde el QueryString
        /// </summary>
        this.Params = params;
    };

    idPieza = Request.Params["id"];
    codigoPieza = Request.Params["codigo"];
    nombrePieza = Request.Params["nombre"];
    precioPieza = Request.Params["precio"];

    if(idPieza !== undefined && codigoPieza !== undefined && nombrePieza !== undefined && precioPieza !== undefined ) {
		$('#txtCodigoPieza').val(codigoPieza);
    	$('#txtNombrePieza').val(nombrePieza);
        $('#txtPrecioPieza').val(precioPieza);
        $('#txtCodigoPieza').attr('disabled', 'disabled');
        $('.title h3').html('ADICIONAR MAS');
    }

    adicionar();

    //on add input button click
    $(AddButton).click(function (e) {
        //max input box allowed
        if(x <= MaxInputs) {
            FieldCount++; //text box added increment
            x++; //text box increment

            //add input box
            adicionar();
        }

        return false;
    });

    $("body").on("click",".removeclass", function(e){ //user click on remove text
        if( x > 1 ) {
            $(this).parent('div').remove(); //remove text box
            x--; //decrement textbox
        }
        return false;
    });

    function adicionar(email) {
        /*$(InputsWrapper).append(
            '<div>'+
            '<input type="text" name="field_'+ FieldCount +'" id="field_'+ FieldCount +'" placeholder="Ingresar correo" '+
            (email !== undefined ? 'value="'+email+'"' : '')+'/>'+
            //'<button class="removeclass">-</button>'+
            '<input type="image" class="removeclass" src="../img/menos.png">'+
            '</div>'
        );*/
        $(InputsWrapper).append(
            '<div class="col-xs-12 col-md-8">'+
            '<input type="text" class="form-control col-md-6 cajas" name="field_cod_'+ FieldCount +'" id="field_cod_'+ FieldCount +'" placeholder="Código pieza"/>'+
            '<input type="text" class="form-control col-md-6 cajas" name="field_nom_'+ FieldCount +'" id="field_nom_'+ FieldCount +'" placeholder="Nombre pieza"/>'+
            '<input type="text" class="form-control col-md-6 cajas" name="field_pre_'+ FieldCount +'" id="field_pre_'+ FieldCount +'" placeholder="Precio pieza"/>'+
            //'<button class="removeclass">-</button>'+
            '<input type="image" class="removeclass" src="img/menos.png">'+
            '</div>'
        );
    }

    /* Para la gestión de Adición y retiro de Partes */

});