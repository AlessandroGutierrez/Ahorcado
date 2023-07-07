var palabras = ["TOMATE", "IGUANA", "HUMANO", "TECLADO", "PANTALLA",
"BANDA","BANANA","CASA","CALABAZA","KOALA","ESCRITORIO","JUEVES","GANADOR",
"CONTENEDOR","MYSQL"];

var palabra = "";
var pRand;
var oculta = [];
var replace = document.getElementById("palabra");
var cont = 7;
var buttons = document.getElementsByClassName('letra');


function principal() {
  createPalab();
  ocultarPalab(palabra.length);
  btnAZ("a","z");
  cont = 7;
  document.getElementById("intentos").innerHTML=cont;
}

function createPalab() {
  pRand = (Math.random() * 14).toFixed(0);
  palabra = palabras[pRand].toUpperCase();
}

function ocultarPalab(num) {
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  replace.innerHTML = oculta.join("");
}

function btnAZ (a,z) {
  document.getElementById("btnABC").innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("btnABC").innerHTML += "<button value='" + letra + "' onclick='comprobar(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
  }
}

function comprobar(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {

    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    replace.innerHTML = oculta.join("");

  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("image"+cont).className += "fade-in";
  }
  posibleFin();
}

function posibleFin() {
  if( oculta.indexOf("_") == -1 ) {
    alert("Felicidades, haz ganado");
    
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }else if( cont == 0 ) {
    alert("Perdiste, la palabra era: "+palabra);
    
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
}

window.onload = principal();