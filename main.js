function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Vector de objetos,cada objeto es un piloto de F1
let pilotos=[
  {
  nombre:"Carlos Sainz",
  equipo:"Ferrari",
  logo:"img/LogoE/Ferrari2.png",
  bandera:"img/BanderasP/Espania.jpg",
  foto:"./img/Pilotos/Sainz.jpg",
  PTS:202
  },
  {
  nombre:"Charles Leclerc",
  equipo:"Ferrari",
  logo:"img/LogoE/Ferrari2.png",
  bandera:"img/BanderasP/Monaco.jpg",
  foto:"./img/Pilotos/Lecrerc.jpg",
  PTS:237
  },
  {
  nombre:"Max Verstappen",
  equipo:"Red Bull",
  logo:"img/LogoE/RedBull.png",
  bandera:"img/BanderasP/Holanda.jpg",
  foto:"./img/Pilotos/Max Verstappen.jpg",
  PTS:341
  },
  {
  nombre:"Checo Perez",
  equipo:"Red Bull",
  logo:"img/LogoE/RedBull.png",
  bandera:"img/BanderasP/Mexico.jpg",
  foto:"./img/Pilotos/Perez.jpg",
  PTS:235
  },
  {
  nombre:"Lando Norris",
  equipo:"Mclaren",
  logo:"img/LogoE/Mclaren.png",
  bandera:"img/BanderasP/ReinoUnido.jpg",
  foto:"./img/Pilotos/Norris.jpg",
  PTS:100
  },
  {
  nombre:"Daniel Ricciardo",
  equipo:"Mclaren",
  logo:"img/LogoE/Mclaren.png",
  bandera:"img/BanderasP/Australia.jpg",
  foto:"./img/Pilotos/Ricciardo.jpg",
  PTS:29
  },
  {
  nombre:"Fernando Alonso",
  equipo:"Alpine",
  logo:"img/LogoE/Alpine.png",
  bandera:"img/BanderasP/Espania.jpg",
  foto:"./img/Pilotos/Alonso.jpg",
  PTS:59
  },
  {
  nombre:"Esteban Ocon",
  equipo:"Alpine",
  logo:"img/LogoE/Alpine.png",
  bandera:"img/BanderasP/Francia.jpg",
  foto:"./img/Pilotos/Ocon.jpg",
  PTS:66
  },
  {
  nombre:"Kevin Magnussen",
  equipo:"Haas F1 Team",
  logo:"img/LogoE/Haas.png",
  bandera:"img/BanderasP/Dinamarca.jpg",
  foto:"./img/Pilotos/Magnussen.jpg",
  PTS:22
  },
  {
  nombre:"Mick Schumacher",
  equipo:"Haas F1 Team",
  logo:"img/LogoE/Haas.png",
  bandera:"img/BanderasP/Alemania.jpg",
  foto:"./img/Pilotos/Schumacher.jpg",
  PTS:12
  },
  {
  nombre:"Lewis Hamilton",
  equipo:"Mercedes",
  logo:"img/LogoE/Mercedes.png",
  bandera:"img/BanderasP/ReinoUnido.jpg",
  foto:"./img/Pilotos/Hamilton.jpg",
  PTS:170
  },
  {
  nombre:"George Russell",
  equipo:"Mercedes",
  logo:"img/LogoE/Mercedes.png",
  bandera:"img/BanderasP/ReinoUnido.jpg",
  foto:"./img/Pilotos/Russell.jpg",
  PTS:203
  },
  {
  nombre:"Yuki Tsunoda",
  equipo:"AlphaTauri",
  logo:"img/LogoE/AlphaTauri.png",
  bandera:"img/BanderasP/Japon.jpg",
  foto:"./img/Pilotos/Tsunoda.jpg",
  PTS:11
  },
  {
  nombre:"Pierre Gasly",
  equipo:"AlphaTauri",
  logo:"img/LogoE/AlphaTauri.png",
  bandera:"img/BanderasP/Francia.jpg",
  foto:"./img/Pilotos/Gasly.jpg",
  PTS:23
  },
  {
  nombre:"Valtteri Bottas",
  equipo:"Alfa Romeo",
  logo:"img/LogoE/AlfaRomeo.png",
  bandera:"img/BanderasP/Finlandia.jpg",
  foto:"./img/Pilotos/Bottas.jpg",
  PTS:46
  },
  {
  nombre:"Zhou Gaunyu",
  equipo:"Alfa Romeo",
  logo:"img/LogoE/AlfaRomeo.png",
  bandera:"img/BanderasP/China.jpg",
  foto:"./img/Pilotos/Gaunyu.jpg",
  PTS:6
  },
  {
  nombre:"Nicholas Latifi",
  equipo:"Williams",
  logo:"img/LogoE/Williams.png",
  bandera:"img/BanderasP/Canada.jpg",
  foto:"./img/Pilotos/Latifi.jpg",
  PTS:0
  },
  {
  nombre:"Alexander Albon",
  equipo:"Williams",
  logo:"img/LogoE/Williams.png",
  bandera:"img/BanderasP/Tailandia.jpg",
  foto:"./img/Pilotos/Albon.jpg",
  PTS:4
  },
  {
  nombre:"Sebastian Vettel",
  equipo:"Aston Martin",
  logo:"img/LogoE/AstonMartin.png",
  bandera:"img/BanderasP/Alemania.jpg",
  foto:"./img/Pilotos/Vettel.jpg",
  PTS:24 
  },
  {
  nombre:"Lance Stroll",
  equipo:"Aston Martin",
  logo:"img/LogoE/AstonMartin.png",
  bandera:"img/BanderasP/Canada.jpg",
  foto:"./img/Pilotos/Stroll.jpg",
  PTS:13
  },
]
//Funcion que arregla en orden decreciente por puntos 
//crea lista porPuntos
let porPuntos = pilotos.slice(0);
// porPuntos.sort(function(a,b) {
//     return b.PTS - a.PTS;
// });
porPuntos.sort((a,b) => b.PTS - a.PTS )


//Codigo tabla de posiciones 
if ( document.getElementById( "idtabla" )) {
//encabezado fijo tabla
cad=`
    <table class="table table-hover table-dark">
    <tr>
        <th>POS</th>
        <th>PILOTO</th>
        <th>EQUIPO</th>
        <th>PTS</th>
    </tr>
    `
//y ademas tiene un contenido que varia segun su data
    for (let [index, puntos] of porPuntos.entries()){
    cad+= `
        <tr>
            <td>${index + 1}</td>
            <td><img class="iconos" src="${puntos.bandera}"></img> 
            ${puntos.nombre}</td>
            <td><img class="iconos" src="${puntos.logo}"></img>
            ${puntos.equipo}
            </td>
            <td>${puntos.PTS}</td>
        </tr>
        `
}
  //le agrego el cierre de la etiqueta table
cad+=`
    </table> 
    `
    
document.getElementById("idtabla").innerHTML = cad;
}

