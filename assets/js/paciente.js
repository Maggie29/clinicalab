window.onload = function(){
  var nombre = document.getElementById("patientName");
  var apellido = document.getElementById("patientLastname");
  var edad = document.getElementById("patientAge");
  var genero = document.getElementById("patientGender");
  var city = document.getElementById("patientCity");
  var pais = document.getElementById("patientCountry");

  var objetoPaciente=JSON.parse(localStorage.getItem("nuevoPaciente"));

  nombre.innerText = objetoPaciente.nombre;
  apellido.innerText= objetoPaciente.apellido;
  edad.innerText = objetoPaciente.edad;
  genero.innerText = objetoPaciente.genero;
  ciudad.innerText = objetoPaciente.pais;
}
