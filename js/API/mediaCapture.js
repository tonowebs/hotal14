var mediaCapture = {
	takePhoto: function(){
		navigator.device.capture.captureImage(mediaCapture.captureSuccess, mediaCapture.captureError, {limit:1});
	},
	captureSuccess: function(mediaFiles) {
		var i, path, len;
		for (i = 0, len = mediaFiles.length; i < len; i++) {
			path = mediaFiles[i].fullPath;
		}
		$('#regPhoto').attr('rel',path).html('<img src="' + path + '" style="width:100%;">');
	},
	captureError: function(error) {
		navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error','Aceptar');
	},
};
