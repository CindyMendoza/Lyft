//menu scroll
window.addEventListener('scroll',function(){
	var nav = document.getElementsByTagName('nav');
  var logo = document.getElementById('logo');
	var a = document.getElementsByClassName('a');
  var login = document.getElementsByClassName('log-in');
	var singup = document.getElementsByClassName('sing-up');
	// var signup = document.getElementById('sign-up');
	// var logoHeader = document.getElementById('logo-header');
	// var menuList = document.getElementsByClassName('menu-list-a');
	// var logIn = document.getElementsByClassName('log-in')[0];
 // window.scrollBy(100, 100);

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

	// var accionScroll = window.pageYOffset || document.documentElement.scrollTop;
	// if (accionScroll > ultimoScrollTop) {
	// 	navHeader.classList.add('bg-header');
	// 	logoHeader.setAttribute('src','assets/img/logo-pink.png');
	// 		signup.style.transform = "translate(-200px, 0px)";
	// 	for (var i = 0; i < menuList.length; i++) {
	// 		menuList[i].classList.add('scroll-header-color');
	// 		logIn.classList.add('scroll-header-border');
	// 	}
	// }
	// else if (accionScroll <= 3) {
	// 	navHeader.classList.remove('bg-header');
	// 	logoHeader.setAttribute('src','assets/img/logo-white.png');
	// 	signup.style.transform = "translate(0px, 0px)";
	//
	// 	for (var i = 0; i < menuList.length; i++) {
	// 		menuList[i].classList.remove('scroll-header-color');
	// 	}
	// 	logIn.classList.remove('scroll-header-border');
	// }
	// ultimoScrollTop = accionScroll;
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
