function Mostrar(){
var nombre  = document.getElementById("name");
var ap      = document.getElementById("lastname");
var dni     = document.getElementById("dni");
var dir     = document.getElementById("address");



    document.getElementById("text").innerHTML = "<strong><h3>"+ "Sus datos son:" + "</h3></strong>" +
                                                  "<ul>" +
                                                  "<li>" + "Nombre: " + nombre.value + "</li>" +
                                                  "<li>" + "Apellido: "+ ap.value + "</li>" +
                                                  "<li>" + "DNI: " + dni.value + "</li>" +
                                                  "<li>" + "Direccion: "+dir.value + "</li>";

}
