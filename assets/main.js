
var registro = document.getElementById("registro");
var pacientes = document.getElementById("send");
pacientes.onclick = function(){
var name = document.getElementById("name").value;
var lastName = document.getElementById("lastName").value;
var gender = document.getElementById("gender").option;
var age = document.getElementById("age").value;
var city = document.getElementById("city").value;
var country = document.getElementById("country").value;

var lista =" <ul>"+
              "<li>NOMBRE: "+name+"</li>"+
              "<li>APELLIDO: "+lastName+"</li>"+
              "<li>EDAD: "+age+"</li>"+
              "<li>PAIS: "+country+"</li>"+
              "</ul>";
result.innerHTML = lista;
}
