function showtx() {

  document.getElementById('tn').style.display="block";
  document.getElementById('te').style.display="block";
  document.getElementById('tc').style.display="block";
}
function redl(){
}
function tt(){
  var dt = document.getElementsByClassName('tooltip');
  var st = document.getElementsByClassName('tooltiptext');
  var tp = document.getElementById('tp');
  var tn = document.getElementById('tn');
  var te = document.getElementById('te');
  var tc = document.getElementById('tc');

  if ((tp.value == "" )&&(/[0-9]{9}/.test(tp.value) != true )){
    st[0].innerHTML="X";
    dt[0].style.visibility="visible";
    st[0].style.visibility="visible";
    tp.style.borderBottomColor="red";
  } else {
    st[0].innerHTML="";
    dt[0].style.visibility="hidden";
    st[0].style.visibility="hidden";
  }

  if ((tn.value == "")&&(/[A-Z][a-z]+/.test(tn.value) == false )){
    st[0].innerHTML="X";
    dt[0].style.visibility="visible";
    st[0].style.visibility="visible";
    tn.style.borderBottomColor="red";
  } else {
    st[0].innerHTML="";
    dt[0].style.visibility="hidden";
    st[0].style.visibility="hidden";

  }

if ((te.value == "")&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/i.test(te.value) == false)){
  st[0].innerHTML="X";
  dt[0].style.visibility="visible";
  st[0].style.visibility="visible";
  te.style.borderBottomColor="red";
} else {
  st[0].innerHTML="";
  dt[0].style.visibility="hidden";
  st[0].style.visibility="hidden";
}

if ((tc.value == "")&&(/[A-Z][a-z]+/.test(tc.value) == false )){
  st[0].innerHTML="X";
  dt[0].style.visibility="visible";
  st[0].style.visibility="visible";
  tc.style.borderBottomColor="red";

} else {
  st[0].innerHTML="";
  dt[0].style.visibility="hidden";
  st[0].style.visibility="hidden";

}
}
