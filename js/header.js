/* Al cargar la página se ocultará o mostrará el menú y el botón */
$(document).on("load", function hideMenu(){
	if($(window).width() < 400){
		$("#menuHeader").hide();
	}else if($(window).width() > 650){
		$("#menuHeader").show();
	}
});


/* Al momento de redimencionar la pantalla se mostrará u ocultará el menú y el botón */
$(window).on("resize",
	function redimencionar(){
		if($(window).width() <= 650){
			$("#menuHeader").hide("blind");
			$("#botonM").show().css("visibility","visible");
		}else if($(window).width() > 650){
			$("#menuHeader").show("blind");
			$("#botonM").hide().css("visibility","hidden");
		}
	}
);

/* Al momento de presionar el botón se mostrará el menú */
$("#botonM").click(
	function(){
		$("#menuHeader").toggle("fold");
	}
);