var nombre  = document.getElementById("name");
var ap      = document.getElementById("lastname");
var dni     = document.getElementById("dni");
var dir     = document.getElementById("address");

button.onclick = function(e){
  e.preventDefault();
    document.getElementById("text").innerHTML = "<strong>"+
                                                  "<ul>" +
                                                  "<li>" + "Nombre: " + nombre.value + "</li>" +
                                                  "<li>" + "Apellido: "+ ap.value + "</li>" +
                                                  "<li>" + "DNI: " + dni.value + "</li>" +
                                                  "<li>" + "Direccion: "+dir.value + "</li>"+
                                                  "</strong>";return false;
}
