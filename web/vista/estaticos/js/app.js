	var UserL = $("#usuario");
	var Pass = $("#contrasena");
		
	function LoginUser() {
		// validar
		var validar = false;
		if (UserL.val()== '') {
			UserL.css({'border':'1px solid red'});
			validar = true;
		}
		if (Pass.val()== '') {
			Pass.css({'border':'1px solid red'});
			validar = true;
		}
		if (validar== false) {
			//alert(validar);
			var Form = $("#frmlogin").serialize();
			//Form
			$.ajax({
				method:'post',
				url:'modelo/loginUser_model.php',
				data:Form,
				cache:'false',
				success:function(data){
					if (data==1) {
						//alert('listo');
						$('.login').remove();
					$.ajax({
					  url: "vista/php/home.php"
					}).done(function(data) { // data what is sent back by the php page
					  $('.dash').html(data); // display data
					});
					}else{
						console.log('malo');
					}
					
				}
			});
		}
	}

function registro() {
	// registro
	var Form = $("#frmregistro").serialize();
			//Form
			$.ajax({
				method:'post',
				url:'modelo/register_model.php',
				data:Form,
				cache:'false',
				success:function(data){
					if (data==1) {
					
					}else{
						console.log('malo');
					}
					
				}
			});
}

/// enviar formularios
$(".enviar").on('click',function(){ 
	 LoginUser();
});
$(".enviarRegistrp").on('click',function(){ 
	 registro();
});



// rutas//

$(".registro").on('click',function(){ 
//	e.preventDefaul();
$('.login').remove();
	 	$.ajax({
					  url: "vista/registro.html"
					}).done(function(data) { // data what is sent back by the php page
					  $('.dash').html(data); // display data
					});
});



