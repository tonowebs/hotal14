// Guardar reservaciones en el dispositivo
var almacen = {
	db: null,
	th: null,
	np: null,
	nh: null,
	nd: null,
	guardarReserva: function(th, np, nh, nd){
		almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 200000);
		almacen.th = th;
		almacen.np = np;
		almacen.nh = nh;
		almacen.nd = nd;
		almacen.db.transaction(almacen.tablaReserva, almacen.error, almacen.exito);
	},
	error: function(e){
		alert("Error", "codigo: "+e.code);
	},
	exito: function(){
		alert("Reserva guardada en dispositivo, en espera de sincronizacion");
		//$.mobile.loading("hide");
	},
	tablaReserva: function(tx){
		tx.executeSql("CREATE TABLE IF NOT EXISTS reservas(th, np, nh, nd)");
		tx.executeSql("INSERT INTO reservas(th, np, nh, nd) 
			VALUES ('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"')");
	}
}


