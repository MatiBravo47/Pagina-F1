app=new Vue({
    el:'#app',
    data:{
        escuderias:[
            {
            nombre:"Ferrari",
            imagen:"img/Escuderias/Ferrari.jpg",
            gradiente:"gradFerrari",
            textColor:"text-white"   
            },
            {
            nombre:" Alfa Romeo",
            imagen:"img/Escuderias/Alfaromeo.jpg",
            gradiente:"gradAlfaRomeo",
            textColor:"text-white"
            },
            {
            nombre:"Alpha Tauri",
            imagen:"img/Escuderias/Alphatauri.jpg",
            gradiente:"gradAlphaTauri",
            textColor:"text-white"
            },
            {
            nombre:"Alpine",
            imagen:"img/Escuderias/Alpine.jpg",
            gradiente:"gradAlpine" ,
            textColor:"text-white"   
            },
            {
            nombre:"Aston Martin",
            imagen:"img/Escuderias/Aston Martin.JPG",
            gradiente:"gradAstonMartin",
            textColor:"text-white"
            },
            {
            nombre:"Haas",
            imagen:"img/Escuderias/Haas.JPG",
            gradiente:"gradHaas",
            textColor:"text-dark"
            },
            {
            nombre:"Mclaren",
            imagen:"img/Escuderias/Mclaren.jpg",
            gradiente:"gradMclaren",
            textColor:"text-dark"
            },
            {
            nombre:"Mercedes",
            imagen:"img/Escuderias/Mercedes.jpg",
            gradiente:"gradMercedes" ,
            textColor:"text-dark"   
            },
            {
            nombre:"RedBull",
            imagen:"img/Escuderias/RB.JPG",
            gradiente:"gradRedBull",
            textColor:"text-white"
            },
            {
            nombre:"Williams",
            imagen:"img/Escuderias/Williams.jpg",
            gradiente:"gradWilliams",
            textColor:"text-white"
            }
        ],
        pilotos:[ {
            nombre:"Carlos Sainz",
            equipo:"Ferrari",
            logo:"img/LogoE/Ferrari.png",
            bandera:"img/BanderasP/Espania.jpg",
            foto:"./img/Pilotos/Sainz.png",
            PTS:102+25,
            color:"Ferrari",
            gradiente:"gradFerrari",
            textColor:"text-white" 
            },
            {
            nombre:"Charles Leclerc",
            equipo:"Ferrari",
            logo:"img/LogoE/Ferrari.png",
            bandera:"img/BanderasP/Monaco.jpg",
            foto:"./img/Pilotos/Lecrerc.png",
            PTS:126 + 12,
            color:"Ferrari",
            gradiente:"gradFerrari",
            textColor:"text-white"
            },
            {
            nombre:"Max Verstappen",
            equipo:"Red Bull",
            logo:"img/LogoE/RedBull.png",
            bandera:"img/BanderasP/Holanda.jpg",
            foto:"./img/Pilotos/Verstappen.png",
            PTS:175 + 6,
            color:"RedBull",
            gradiente:"gradRedBull",
            textColor:"text-white"
            },
            {
            nombre:"Checo Perez",
            equipo:"Red Bull",
            logo:"img/LogoE/RedBull.png",
            bandera:"img/BanderasP/Mexico.jpg",
            foto:"./img/Pilotos/Perez.png",
            PTS:129 + 18,
            color:"RedBull",
            gradiente:"gradRedBull",
            textColor:"text-white"
            },
            {
            nombre:"Lando Norris",
            equipo:"Mclaren",
            logo:"img/LogoE/Mclaren.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Norris.png",
            PTS:50 + 8,
            color:"Mclaren",
            gradiente:"gradMclaren",
            textColor:"text-dark"
            },
            {
            nombre:"Daniel Ricciardo",
            equipo:"Mclaren",
            logo:"img/LogoE/Mclaren.png",
            bandera:"img/BanderasP/Australia.jpg",
            foto:"./img/Pilotos/Ricciardo.png",
            PTS:15,
            color:"Mclaren",
            gradiente:"gradMclaren",
            textColor:"text-dark"
            },
            {
            nombre:"Fernando Alonso",
            equipo:"Alpine",
            logo:"img/LogoE/Alpine.png",
            bandera:"img/BanderasP/Espania.jpg",
            foto:"./img/Pilotos/Alonso.png",
            PTS:18 + 10,
            color:"Alpine",
            gradiente:"gradAlpine",
            textColor:"text-white"
            },
            {
            nombre:"Esteban Ocon",
            equipo:"Alpine",
            logo:"img/LogoE/Alpine.png",
            bandera:"img/BanderasP/Francia.jpg",
            foto:"./img/Pilotos/Ocon.png",
            PTS:39,
            color:"Alpine",
            gradiente:"gradAlpine",
            textColor:"text-white"
            },
            {
            nombre:"Kevin Magnussen",
            equipo:"Haas F1 Team",
            logo:"img/LogoE/Haas.png",
            bandera:"img/BanderasP/Dinamarca.jpg",
            foto:"./img/Pilotos/Magnussen.png",
            PTS:15 + 1,
            color:"Haas",
            gradiente:"gradHaas",
            textColor: "text-dark"
            },
            {
            nombre:"Mick Schumacher",
            equipo:"Haas F1 Team",
            logo:"img/LogoE/Haas.png",
            bandera:"img/BanderasP/Alemania.jpg",
            foto:"./img/Pilotos/Schumacher.png",
            PTS:0+4,
            color:"Haas",
            gradiente:"gradHaas",
            textColor: "text-dark"
            },
            {
            nombre:"Lewis Hamilton",
            equipo:"Mercedes",
            logo:"img/LogoE/Mercedes.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Hamilton.png",
            PTS:77 + 16,
            color:"Mercedes",
            gradiente:"gradMercedes",
            textColor: "text-dark"
            },
            {
            nombre:"George Russell",
            equipo:"Mercedes",
            logo:"img/LogoE/Mercedes.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Russell.png",
            PTS:111,
            color:"Mercedes",
            gradiente:"gradMercedes" ,
            textColor: "text-dark"
            },
            {
            nombre:"Yuki Tsunoda",
            equipo:"AlphaTauri",
            logo:"img/LogoE/AlphaTauri.png",
            bandera:"img/BanderasP/Japon.jpg",
            foto:"./img/Pilotos/Tsunoda.png",
            PTS:11,
            color:"AlphaTauri",
            gradiente:"gradAlphaTauri",
            textColor:"text-white"
            },
            {
            nombre:"Pierre Gasly",
            equipo:"AlphaTauri",
            logo:"img/LogoE/AlphaTauri.png",
            bandera:"img/BanderasP/Francia.jpg",
            foto:"./img/Pilotos/Gasly.png",
            PTS:16,
            color:"AlphaTauri",
            gradiente:"gradAlphaTauri",
            textColor:"text-white"
            },
            {
            nombre:"Valtteri Bottas",
            equipo:"Alfa Romeo",
            logo:"img/LogoE/AlfaRomeo.png",
            bandera:"img/BanderasP/Finlandia.jpg",
            foto:"./img/Pilotos/Bottas.png",
            PTS:46,
            color:"AlfaRomeo",
            gradiente:"gradAlfaRomeo",
            textColor:"text-white"
            },
            {
            nombre:"Zhou Gaunyu",
            equipo:"Alfa Romeo",
            logo:"img/LogoE/AlfaRomeo.png",
            bandera:"img/BanderasP/China.jpg",
            foto:"./img/Pilotos/Gaunyu.png",
            PTS:5,
            color:"AlfaRomeo",
            gradiente:"gradAlfaRomeo",
            textColor:"text-white"
            },
            {
            nombre:"Nicholas Latifi",
            equipo:"Williams",
            logo:"img/LogoE/Williams.png",
            bandera:"img/BanderasP/Canada.jpg",
            foto:"./img/Pilotos/Latifi.png",
            PTS:0,
            color:"Williams",
            gradiente:"gradWilliams",
            textColor:"text-white"
            },
            {
            nombre:"Alexander Albon",
            equipo:"Williams",
            logo:"img/LogoE/Williams.png",
            bandera:"img/BanderasP/Tailandia.jpg",
            foto:"./img/Pilotos/Albon.png",
            PTS:0,
            color:"Williams",
            gradiente:"gradWilliams",
            textColor:"text-white"
            },
            {
            nombre:"Sebastian Vettel",
            equipo:"Aston Martin",
            logo:"img/LogoE/AstonMartin.png",
            bandera:"img/BanderasP/Alemania.jpg",
            foto:"./img/Pilotos/Vettel.png",
            PTS:13 + 2,
            color:"AstonMartin",
            gradiente:"gradAstonMartin",
            textColor:"text-white"
            },
            {
            nombre:"Lance Stroll",
            equipo:"Aston Martin",
            logo:"img/LogoE/AstonMartin.png",
            bandera:"img/BanderasP/Canada.jpg",
            foto:"./img/Pilotos/Stroll.png",
            PTS:3,
            color:"AstonMartin",
            gradiente:"gradAstonMartin",
            textColor:"text-white"
            }]
    }
})