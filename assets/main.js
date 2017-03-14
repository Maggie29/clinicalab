var registroPacientes=[];
function datosPacientes(name, lastName, gender, age, city, country) {
  this.name = name;
  this.lastName = lastName;
  this.gender = gender;
  this.age= age;
  this.city = city;
  this.lista = function() {
    return " <ul>"+
                  "<li>NOMBRE: "+name+"</li>"+
                  "<li>APELLIDO: "+lastName+"</li>"+
                  "<li>EDAD: "+age+"</li>"+
                  "<li>PAIS: "+country+"</li>"+
                  "</ul>";
  }
};
var registro = document.getElementById("registro");
var pacientes = document.getElementById("send");

pacientes.addEventListener("click", function(){
var name = document.getElementById("name").value;
var lastName = document.getElementById("lastName").value;
var gender = document.getElementById("gender").option;
var age = document.getElementById("age").value;
var city = document.getElementById("city").value;
var country = document.getElementById("country").value;

var pacientitos = new datosPacientes(name,lastName,gender, age, city, country)
registroPacientes.push(pacientitos);

registro.innerHTML +=pacientitos.lista();
})
