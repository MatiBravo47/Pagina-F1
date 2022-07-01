function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var data=[
  {Codigo:"cod1",
  nombre:"Carlos Sainz",
  equipo:"Ferrari",
  logo:"img/logoE/Ferrari.png",
  bandera:"img/BanderasP/Espania.jpg",
  PTS:102,
  },
  {Codigo:"cod2",
  nombre:"Charles Leclerc",
  equipo:"Ferrari",
  logo:"img/logoE/Ferrari.png",
  bandera:"img/BanderasP/Monaco.jpg",
  PTS:126
  },
  {Codigo:"cod3",
  nombre:"Max Verstappen",
  equipo:"Red Bull Racing",
  logo:"img/logoE/RedBull.png",
  bandera:"img/BanderasP/Monaco.jpg",
  PTS:175
  },
  {Codigo:"cod4",
  nombre:"Checo Perez",
  equipo:"Red Bull Racing",
  logo:"img/logoE/RedBull.png",
  bandera:"img/BanderasP/Mexico.jpg",
  PTS:129
  },
  {Codigo:"cod5",
  nombre:"Lando Norris",
  equipo:"Mclaren",
  logo:"img/logoE/Mclaren.png",
  bandera:"img/BanderasP/EEUU.jpg",
  PTS:50
  },
  {Codigo:"cod6",
  nombre:"Daniel Ricciardo",
  equipo:"Mclaren",
  logo:"img/logoE/Mclaren.png",
  bandera:"img/BanderasP/Australia.jpg",
  PTS:15
  },
  {Codigo:"cod7",
  nombre:"Fernando Alonso",
  equipo:"Alpine",
  logo:"img/logoE/Alpine.png",
  bandera:"img/BanderasP/Espania.jpg",
  PTS:18
  },
  {Codigo:"cod8",
  nombre:"Esteban Ocon",
  equipo:"Alpine",
  logo:"img/logoE/Alpine.png",
  bandera:"img/BanderasP/Francia.jpg",
  PTS:39
  },
  {Codigo:"cod9",
  nombre:"Kevin Magnussen",
  equipo:"Haas F1 Team",
  logo:"img/logoE/Haas.png",
  bandera:"img/BanderasP/Dinamarca.jpg",
  PTS:15
  },
  {Codigo:"cod10",
  nombre:"Mick Schumacher",
  equipo:"Haas F1 Team",
  logo:"img/logoE/Haas.png",
  bandera:"img/BanderasP/Alemania.jpg",
  PTS:0
  },
  {Codigo:"cod11",
  nombre:"Lewis Hamilton",
  equipo:"Mercedes",
  logo:"img/logoE/Mercedes.png",
  bandera:"img/BanderasP/EEUU.jpg",
  PTS:77
  },
  {Codigo:"cod12",
  nombre:"George Russell",
  equipo:"Mercedes",
  logo:"img/logoE/Mercedes.png",
  bandera:"img/BanderasP/EEUU.jpg",
  PTS:111
  },
  {Codigo:"cod13",
  nombre:"Yuki Tsunoda",
  equipo:"AlphaTauri",
  logo:"img/logoE/AlphaTauri.png",
  bandera:"img/BanderasP/Japon.jpg",
  PTS:11
  },
  {Codigo:"cod14",
  nombre:"Pierre Gasly",
  equipo:"AlphaTauri",
  logo:"img/logoE/AlphaTauri.png",
  bandera:"img/BanderasP/Francia.jpg",
  PTS:16
  },
  {Codigo:"cod15",
  nombre:"Valtteri Bottas",
  equipo:"Alfa Romeo",
  logo:"img/logoE/AlfaRomeo.png",
  bandera:"img/BanderasP/Finlandia.jpg",
  PTS:46
  },
  {Codigo:"cod16",
  nombre:"Zhou Gaunyu",
  equipo:"Alfa Romeo",
  logo:"img/logoE/AlfaRomeo.png",
  bandera:"img/BanderasP/China.jpg",
  PTS:5
  },
  {Codigo:"cod17",
  nombre:"Nicholas Latifi",
  equipo:"Williams",
  logo:"img/logoE/Williams.png",
  bandera:"img/BanderasP/Canada.jpg",
  PTS:0
  },
  {Codigo:"cod18",
  nombre:"Alexander Albon",
  equipo:"Williams",
  logo:"img/logoE/Williams.png",
  bandera:"img/BanderasP/Tailandia.jpg",
  PTS:3
  },
  {Codigo:"cod19",
  nombre:"Sebastian Vettel",
  equipo:"Aston Martin",
  logo:"img/logoE/AstonMartin.png",
  bandera:"img/BanderasP/Alemania.jpg",
  PTS:13
  },
  {Codigo:"cod20",
  nombre:"Lance Stroll",
  equipo:"Aston Martin",
  logo:"img/logoE/AstonMartin.png",
  bandera:"img/BanderasP/Canada.jpg",
  PTS:3
  },
]
var porPuntos = data.slice(0);
porPuntos.sort(function(a,b) {
  return b.PTS - a.PTS;
});
if ( document.getElementById( "idtabla" )) {
  //la tabla tiene un encabezado fijo
cad=`
    <p class="h1">Clasificacion mundial de pilotos<p>
    <table class="table table-hover table-dark">
      <tr>
        <th>Posicion</th>
        <th></th>
        <th>Piloto</th>
        <th>Equipo</th>
        <th></th>
        <th>PTS</th>
      </tr>
  `
//y ademas tiene un contenido que varia segun su data
for (var i=0; i<data.length; i++) {
    cad+= `
        <tr>
            <td>${i+1}</td>
            <td><img src="${porPuntos[i].bandera}" width="40px" ;border-style:none; ></img></td> 
            <td>${porPuntos[i].nombre}</td>
            <td>${porPuntos[i].equipo}</td>
            <td><img src="${porPuntos[i].logo}" width="40px" ;border-style:none; ></img></td>
            <td>${porPuntos[i].PTS}</td>
        </tr>
        `
}
  //le agrego el cierre de la etiqueta table
cad+=`
    </table> 
    `
    
document.getElementById("idtabla").innerHTML = cad;
}





