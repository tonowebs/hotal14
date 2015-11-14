var fileTransfer = {
	win: function (r) {
		if(r.response == '1'){
			navigator.notification.alert("Los datos se han enviado satisfactoriamente", ls.registroLocal, "Registro Correcto", "Aceptar");
		}else{
			alert("Error");
		}
			
	},
	fail: function (error) {
		alert("An error has occurred: Code = " + error.code);
	},
	sendPhoto: function(path){
		var options = new FileUploadOptions();
		options.fileKey = "foto";
		options.fileName = "Carlos";
		options.mimeType = "image/jpeg";

		var ft = new FileTransfer();
		ft.upload(path, "http://carlos.igitsoft.com/apps/test.php", fileTransfer.win, fileTransfer.fail, options);
	}
};