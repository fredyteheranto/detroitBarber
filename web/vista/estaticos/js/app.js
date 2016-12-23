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
						alert('listo');
					}else{
						alert('malo');
					}
					
				}
			})
		}
	}




$(".enviar").on('click',function(){ 
//	e.preventDefaul();
	 LoginUser();
});


