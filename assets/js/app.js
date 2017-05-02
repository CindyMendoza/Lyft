var dt = document.getElementsByClassName('tooltip');
var st = document.getElementsByClassName('tooltiptext');
var tp = document.getElementById('tp');
var tn = document.getElementById('tn');
var te = document.getElementById('te');
var tc = document.getElementById('tc');


function showtx() {

  tn.style.display="block";
  te.style.display="block";
  tc.style.display="block";
}
function limpiar(t,i){
  st[i].innerHTML="";
  dt[i].style.visibility="hidden";
  st[i].style.visibility="hidden";
  t.style.borderBottom="1px solid black";
}

function tt(){

  if ((tp.value == "" )||(/[0-9]{9}/.test(tp.value) != true )){
    st[0].innerHTML="X";
    dt[0].style.visibility="visible";
    st[0].style.visibility="visible";
    tp.style.borderBottom="3px solid red";
  }

/*  if ((tn.value == "")&&(/[A-Z][a-z]+/.test(tn.value) == false )){
    st[1].innerHTML="X";
    dt[1].style.visibility="visible";
    st[1].style.visibility="visible";
    tn.style.borderBottomColor="red";
  } else {
    st[1].innerHTML="";
    dt[1].style.visibility="hidden";
    st[1].style.visibility="hidden";

  }

if ((te.value == "")&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/i.test(te.value) == false)){
  st[2].innerHTML="X";
  dt[2].style.visibility="visible";
  st[2].style.visibility="visible";
  te.style.borderBottomColor="red";
} else {
  st[2].innerHTML="";
  dt[2].style.visibility="hidden";
  st[2].style.visibility="hidden";
}

if ((tc.value == "")&&(/[A-Z][a-z]+/.test(tc.value) == false )){
  st[3].innerHTML="X";
  dt[3].style.visibility="visible";
  st[3].style.visibility="visible";
  tc.style.borderBottomColor="red";

} else {
  st[3].innerHTML="";
  dt[3].style.visibility="hidden";
  st[3].style.visibility="hidden";

}*/
}
