  window.onload = function(){
  document.getElementById("form").onsubmit = function(e){
    e.preventDefault();
}

function datosPacientes(name, lastName, gender, age, city, country) {
  this.name = name;
  this.lastName = lastName;
  this.gender = gender;
  this.age= age;
  this.city = city;
  this.country = country;
  };

  var registroPacientes=[];

  document.getElementById("send").addEventListener("click", function(){
    var name = document.getElementById("name").value;
    var lastName= document.getElementById("lastName").value;
    var gender = document.getElementById("gender").option;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    if(name.length!=0 && lastName.length!=0 && age.length!=0 && city.length!=0 && country.length!=0){
      registroPacientes.push(new datosPacientes(name, lastName,gender, age, city, country));
      //console.log(datosPacientes);
      creandoDiv(registroPacientes);
//console.log(new datosPacientes(name, lastName,gender, age, city, country));
//localStorage.setItem("nuevoPaciente", JSON.stringify(new datosPacientes(name, lastName,gender, age, city, country)))*/
      document.getElementById("form").reset();
    //  window.location= "pacientes.html"
		//}
  }else{
			var error = document.getElementById("error");
			error.innerText = "Todo los campos son obligatorios";
		}
  });
    //console.log(registroPacientes);
  //});*/
//Div papa
function creandoDiv() {

  var registro = document.getElementById("registro");
  registroPacientes.forEach(function(e){
  var divRegistro = document.createElement("div");
  //registro.innerHTML = "";

  divRegistro.classList.add("un-paciente");

  var pName= document.createElement("p");
  pName.innerHTML= "Nombre: " + e.name +" "+ e.lastName;
    divRegistro.appendChild(pName)
    var pAge = document.createElement("p");
    pAge.innerHTML = "Edad: " + e.age;
    divRegistro.appendChild(pAge);

    var pCountry= document.createElement("p");
    pCountry.innerHTML = "Pais: " + e.country;
    divRegistro.appendChild(pCountry);
      registro.appendChild(divRegistro);
  });
}

 var names = document.getElementById("name");
 	var lastNames = document.getElementById("lastName");
 	var age = document.getElementById("age");

 	var soloLetras = function(e){
 		var codigoTecla = e.keyCode;
 		if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
 			this.nextElementSibling.nextElementSibling.innerText = "";
 			return true;
 		}else{
 			this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras"
 			return false;
 		}
 	}
  names.onkeypress = soloLetras;
  lastNames.onkeypress = soloLetras;

  var soloNumeros = function(e){
		var codigoTecla = e.keyCode;
		var longitud = this.value.length;
		if(longitud==1){
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
		}
		if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<=2){
			return true;
		}else{
			return false;
		}
	}
  age.onkeypress= soloNumeros;
}
