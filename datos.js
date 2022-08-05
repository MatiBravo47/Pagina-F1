app=new Vue({
    el:'#app',
    data:{
        escuderias:[
            {
            nombre:"Ferrari",
            imagen:"img/Escuderias/Ferrari.jpg",
            gradiente:"gradFerrari",
            text:"text-white"   
            },
            {
            nombre:" Alfa Romeo",
            imagen:"img/Escuderias/Alfaromeo.jpg",
            gradiente:"gradAlfaRomeo",
            text:"text-white"
            },
            {
            nombre:"Alpha Tauri",
            imagen:"img/Escuderias/Alphatauri.jpg",
            gradiente:"gradAlphaTauri",
            text:"text-white"
            },
            {
            nombre:"Alpine",
            imagen:"img/Escuderias/Alpine.jpg",
            gradiente:"gradAlpine" ,
            text:"text-white"   
            },
            {
            nombre:"Aston Martin",
            imagen:"img/Escuderias/Aston Martin.JPG",
            gradiente:"gradAstonMartin",
            text:"text-white"
            },
            {
            nombre:"Haas",
            imagen:"img/Escuderias/Haas.JPG",
            gradiente:"gradHaas",
            text:"text-dark"
            },
            {
            nombre:"Mclaren",
            imagen:"img/Escuderias/Mclaren.jpg",
            gradiente:"gradMclaren",
            text:"text-dark"
            },
            {
            nombre:"Mercedes",
            imagen:"img/Escuderias/Mercedes.jpg",
            gradiente:"gradMercedes" ,
            text:"text-dark"   
            },
            {
            nombre:"RedBull",
            imagen:"img/Escuderias/RB.JPG",
            gradiente:"gradRedBull",
            text:"text-white"
            },
            {
            nombre:"Williams",
            imagen:"img/Escuderias/Williams.jpg",
            gradiente:"gradWilliams",
            text:"text-white"
            }
        ],
        pilotos:[ {
            nombre:"Carlos Sainz",
            equipo:"Ferrari",
            logo:"img/LogoE/Ferrari.png",
            bandera:"img/BanderasP/Espania.jpg",
            foto:"./img/Pilotos/Sainz.jpg",
            PTS:102+25,
            gradiente:"gradFerrari",
            text:"text-white" 
            },
            {
            nombre:"Charles Leclerc",
            equipo:"Ferrari",
            logo:"img/LogoE/Ferrari.png",
            bandera:"img/BanderasP/Monaco.jpg",
            foto:"./img/Pilotos/Lecrerc.jpg",
            PTS:126 + 12,
            gradiente:"gradFerrari",
            text:"text-white"
            },
            {
            nombre:"Max Verstappen",
            equipo:"Red Bull",
            logo:"img/LogoE/RedBull.png",
            bandera:"img/BanderasP/Holanda.jpg",
            foto:"./img/Pilotos/Max Verstappen.jpg",
            PTS:175 + 6,
            gradiente:"gradRedBull",
            text:"text-white"
            },
            {
            nombre:"Checo Perez",
            equipo:"Red Bull",
            logo:"img/LogoE/RedBull.png",
            bandera:"img/BanderasP/Mexico.jpg",
            foto:"./img/Pilotos/Perez.jpg",
            PTS:129 + 18,
            gradiente:"gradRedBull",
            text:"text-white"
            },
            {
            nombre:"Lando Norris",
            equipo:"Mclaren",
            logo:"img/LogoE/Mclaren.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Norris.jpg",
            PTS:50 + 8,
            gradiente:"gradMclaren",
            text:"text-dark"
            },
            {
            nombre:"Daniel Ricciardo",
            equipo:"Mclaren",
            logo:"img/LogoE/Mclaren.png",
            bandera:"img/BanderasP/Australia.jpg",
            foto:"./img/Pilotos/Ricciardo.jpg",
            PTS:15,
            gradiente:"gradMclaren",
            text:"text-dark"
            },
            {
            nombre:"Fernando Alonso",
            equipo:"Alpine",
            logo:"img/LogoE/Alpine.png",
            bandera:"img/BanderasP/Espania.jpg",
            foto:"./img/Pilotos/Alonso.jpg",
            PTS:18 + 10,
            gradiente:"gradAlpine",
            text:"text-white"
            },
            {
            nombre:"Esteban Ocon",
            equipo:"Alpine",
            logo:"img/LogoE/Alpine.png",
            bandera:"img/BanderasP/Francia.jpg",
            foto:"./img/Pilotos/Ocon.jpg",
            PTS:39,
            gradiente:"gradAlpine",
            text:"text-white"
            },
            {
            nombre:"Kevin Magnussen",
            equipo:"Haas F1 Team",
            logo:"img/LogoE/Haas.png",
            bandera:"img/BanderasP/Dinamarca.jpg",
            foto:"./img/Pilotos/Magnussen.jpg",
            PTS:15 + 1,
            gradiente:"gradHaas",
            text: "text-dark"
            },
            {
            nombre:"Mick Schumacher",
            equipo:"Haas F1 Team",
            logo:"img/LogoE/Haas.png",
            bandera:"img/BanderasP/Alemania.jpg",
            foto:"./img/Pilotos/Schumacher.jpg",
            PTS:0+4,
            gradiente:"gradHaas",
            text: "text-dark"
            },
            {
            nombre:"Lewis Hamilton",
            equipo:"Mercedes",
            logo:"img/LogoE/Mercedes.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Hamilton.jpg",
            PTS:77 + 16,
            gradiente:"gradMercedes",
            text: "text-dark"
            },
            {
            nombre:"George Russell",
            equipo:"Mercedes",
            logo:"img/LogoE/Mercedes.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Russell.jpg",
            PTS:111,
            gradiente:"gradMercedes" ,
            text: "text-dark"
            },
            {
            nombre:"Yuki Tsunoda",
            equipo:"AlphaTauri",
            logo:"img/LogoE/AlphaTauri.png",
            bandera:"img/BanderasP/Japon.jpg",
            foto:"./img/Pilotos/Tsunoda.jpg",
            PTS:11,
            gradiente:"gradAlphaTauri",
            text:"text-white"
            },
            {
            nombre:"Pierre Gasly",
            equipo:"AlphaTauri",
            logo:"img/LogoE/AlphaTauri.png",
            bandera:"img/BanderasP/Francia.jpg",
            foto:"./img/Pilotos/Gasly.jpg",
            PTS:16,
            gradiente:"gradAlphaTauri",
            text:"text-white"
            },
            {
            nombre:"Valtteri Bottas",
            equipo:"Alfa Romeo",
            logo:"img/LogoE/AlfaRomeo.png",
            bandera:"img/BanderasP/Finlandia.jpg",
            foto:"./img/Pilotos/Bottas.jpg",
            PTS:46,
            gradiente:"gradAlfaRomeo",
            text:"text-white"
            },
            {
            nombre:"Zhou Gaunyu",
            equipo:"Alfa Romeo",
            logo:"img/LogoE/AlfaRomeo.png",
            bandera:"img/BanderasP/China.jpg",
            foto:"./img/Pilotos/Gaunyu.jpg",
            PTS:5,
            gradiente:"gradAlfaRomeo",
            text:"text-white"
            },
            {
            nombre:"Nicholas Latifi",
            equipo:"Williams",
            logo:"img/LogoE/Williams.png",
            bandera:"img/BanderasP/Canada.jpg",
            foto:"./img/Pilotos/Latifi.jpg",
            PTS:0,
            gradiente:"gradWilliams",
            text:"text-white"
            },
            {
            nombre:"Alexander Albon",
            equipo:"Williams",
            logo:"img/LogoE/Williams.png",
            bandera:"img/BanderasP/Tailandia.jpg",
            foto:"./img/Pilotos/Albon.jpg",
            PTS:3,
            gradiente:"gradWilliams",
            text:"text-white"
            },
            {
            nombre:"Sebastian Vettel",
            equipo:"Aston Martin",
            logo:"img/LogoE/AstonMartin.png",
            bandera:"img/BanderasP/Alemania.jpg",
            foto:"./img/Pilotos/Vettel.jpg",
            PTS:13 + 2,
            gradiente:"gradAstonMartin",
            text:"text-white"
            },
            {
            nombre:"Lance Stroll",
            equipo:"Aston Martin",
            logo:"img/LogoE/AstonMartin.png",
            bandera:"img/BanderasP/Canada.jpg",
            foto:"./img/Pilotos/Stroll.jpg",
            PTS:3,
            gradiente:"gradAstonMartin",
            text:"text-white"
            }]
    }
})