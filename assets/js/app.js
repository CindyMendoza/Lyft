//menu scroll
window.addEventListener('scroll',function(){
	var nav = document.getElementsByTagName('nav');
  var logo = document.getElementById('logo');
	var a = document.getElementsByClassName('a');
  var login = document.getElementsByClassName('log-in');
	var singup = document.getElementsByClassName('sing-up');


console.log(window.pageYOffset);
console.log(document.documentElement.scrollTop);
if(window.pageYOffset > 50){
	nav[0].style.background="white";
	singup[0].style.display="inline-block";
	singup[0].style.border="1px solid fuchsia";
	singup[0].style.color="fuchsia";
	login[0].style.border = "1px solid black";
	for (var i = 0; i < a.length; i++) {
		a[i].style.color="black";
	}
	logo.setAttribute('src','assets/img/logo-pink.png');
}else {
	nav[0].style.background="transparent";
	login[0].style.border="1px solid white";
	singup[0].style.display="none";
	for (var i = 0; i < a.length; i++) {
		a[i].style.color="white";
	}
	logo.setAttribute('src','assets/img/logo-white.png');
}

	},false);

//desplegar form
var inputPhone = document.getElementById('phone-number');

inputPhone.addEventListener('focus',function (e) {
  var inputsOcultos = document.getElementsByClassName('input-oculto');
  for (var i = 0; i < inputsOcultos.length; i++) {
    inputsOcultos[i].classList.remove('input-oculto');
	}
});


// VALIDACIONES

function validarVacio(){
	if(this.value.trim() === ""){
		this.nextElementSibling.style.display = "block";
    this.classList.add('error-input');
		return false;
	}
}

//INPUTS VACIOS
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('blur',validarVacio);
}
