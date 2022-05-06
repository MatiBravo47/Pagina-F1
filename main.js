function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let circuitos = ["Bahrein","Arabia Saudita","Australia","Emilia Romagna","Miami","Espania","Monaco","Azerbaiyan","Canada","Gran Bretania","Austria","Francia","Hungria","Belgica","Paises Bajos","Italia","Singapur","Japon","Estados Unidos","Ciudad de Mexico","Sao Paulo","Abu Dhabi"];
let dias = [20,27,10,24,8,22,29,12,19,3,10,24,31,28,4,11,2,9,23,30,13,20];
let meses= ["Marzo","Marzo","Abril","Abril","Mayo","Mayo","Mayo","Junio","Junio","Julio","Julio","Julio","Julio","Agosto","Septiembre","Septiembre","Octubre","Octubre","Octubre","Noviembre","Noviembre"];
let nombre=["Max","Daniel","Lando","Sebastian","Nicholas","Pierre","Sergio","Fernando","Charles","Lance","Kevin","Yuki","Alexander","Guanyu","Esteban","Lewis","Mick","Carlos","George","Valtteri"];
let apellido=["Verstappen","Ricciardo","Norris","Vettel","Latifi","Gasly","Perez","Alonso","Leclerc","Stroll","Magnussen","Tsunoda","Albon","Zhou","Ocon","Hamilton","Schumacher","Sainz","Russell","Bottas"];
let numero=[1,3,4,5,6,10,11,14,16,18,20,22,23,24,31,44,47,55,63,77];
let equipos=["Mclaren","Ferrari","Red Bull","Mercedes","Alpine","Williams","Alfa Romeo","Alpha Tauri","Aston Martin"];

// document.getElementById("calendario").innerHTML=
// `
// <div>
//   <p>dia:${dias[1]}</p>
//   <p>mes:${meses[1]}</p>
//   <p>circuito:${circuitos[1]}</p>
// </div>
// `
//document.getElementById("calendario").innerHTML= cad

//const hoy=fecha.getdate();
//const mesActual = fecha.getMonth() +1 ;
let cad=""
for (let i=0; i<fotos.length);i++ {
  cad=cad+
'<p>("Gran premio de "+ $(item[i]) + "  ")</p>`}

document.getElementById("calendario").innerHTML=cad

document.write(cad)



