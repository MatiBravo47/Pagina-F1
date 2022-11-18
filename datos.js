app=new Vue({
    el:'#app',
    data:{
        escuderias:[
            {
            nombre:"Ferrari",
            imagen:"img/Escuderias/Ferrari.jpg",
            gradiente:"gradFerrari",
            logo:"img/LogoE/ferrari.svg",
            textColor:"text-white"   
            },
            {
            nombre:" Alfa Romeo",
            imagen:"img/Escuderias/Alfaromeo.jpg",
            gradiente:"gradAlfaRomeo",
            logo:"img/LogoE/AlfaRomeo.svg",
            textColor:"text-white"
            },
            {
            nombre:"Alpha Tauri",
            imagen:"img/Escuderias/Alphatauri.jpg",
            gradiente:"gradAlphaTauri",
            logo:"img/LogoE/alphatauriv2.png",
            textColor:"text-white"
            },
            {
            nombre:"Alpine",
            imagen:"img/Escuderias/Alpine.jpg",
            gradiente:"gradAlpine" ,
            logo:"img/LogoE/Alpine.png",
            textColor:"text-white"   
            },
            {
            nombre:"Aston Martin",
            imagen:"img/Escuderias/Aston Martin.JPG",
            gradiente:"gradAstonMartin",
            logo:"img/LogoE/AstonMartin.png",
            textColor:"text-white"
            },
            {
            nombre:"Haas",
            imagen:"img/Escuderias/Haas.JPG",
            gradiente:"gradHaas",
            logo:"img/LogoE/Haas.svg",
            textColor:"text-dark"
            },
            {
            nombre:"Mclaren",
            imagen:"img/Escuderias/Mclaren.jpg",
            gradiente:"gradMclaren",
            logo:"img/LogoE/Mclaren.png",
            textColor:"text-dark"
            },
            {
            nombre:"Mercedes",
            imagen:"img/Escuderias/Mercedes.jpg",
            gradiente:"gradMercedes" ,
            logo:"img/LogoE/Mercedes.svg",
            textColor:"text-dark"   
            },
            {
            nombre:"RedBull",
            imagen:"img/Escuderias/RB.JPG",
            logo:"img/LogoE/redbull.svg",
            gradiente:"gradRedBull",
            textColor:"text-white"
            },
            {
            nombre:"Williams",
            imagen:"img/Escuderias/Williams.jpg",
            gradiente:"gradWilliams",
            logo:"img/LogoE/Williams.png",
            textColor:"text-white"
            }
        ],
        // ===========================LISTA PILOTOS==============================================
        pilotos:[ {
            nombre: "Carlos",
            apellido: "Sainz",
            equipo:"Ferrari",
            logo:"img/LogoE/Ferrari.svg",
            bandera:"img/BanderasP/Espania.jpg",
            foto:"./img/Pilotos/Sainz.png",
            PTS:102+25,
            color:"Ferrari",
            gradiente:"gradFerrari",
            numero:"./img/Numero/55.png",
            textColor:"text-white"
            },
            {
            nombre:"Charles",
            apellido: "Leclerc",
            equipo:"Ferrari",
            logo:"img/LogoE/Ferrari.png",
            bandera:"img/BanderasP/Monaco.jpg",
            foto:"./img/Pilotos/Lecrerc.png",
            PTS:126 + 12,
            color:"Ferrari",
            gradiente:"gradFerrari",
            numero:"./img/Numero/16.png",
            textColor:"text-white"
            },
            {
            nombre:"Max",
            apellido: "Verstappen",
            equipo:"Red Bull",
            logo:"img/LogoE/RedBull.png",
            bandera:"img/BanderasP/Holanda.jpg",
            foto:"./img/Pilotos/Verstappen.png",
            PTS:175 + 6,
            color:"RedBull",
            gradiente:"gradRedBull",
            numero:"./img/Numero/1.png",
            textColor:"text-white"
            },
            {
            nombre:"Checo",
            apellido: "Perez",
            equipo:"Red Bull",
            logo:"img/LogoE/RedBull.png",
            bandera:"img/BanderasP/Mexico.jpg",
            foto:"./img/Pilotos/Perez.png",
            PTS:129 + 18,
            color:"RedBull",
            gradiente:"gradRedBull",
            numero:"./img/Numero/11.png",
            textColor:"text-white"
            },
            {
            nombre:"Lando",
            apellido: "Norris",
            equipo:"Mclaren",
            logo:"img/LogoE/Mclaren.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Norris.png",
            PTS:50 + 8,
            color:"Mclaren",
            gradiente:"gradMclaren",
            numero:"./img/Numero/4.png",
            textColor:"text-dark"
            },
            {
            nombre:"Daniel",
            apellido: "Ricciardo",
            equipo:"Mclaren",
            logo:"img/LogoE/Mclaren.png",
            bandera:"img/BanderasP/Australia.jpg",
            foto:"./img/Pilotos/Ricciardo.png",
            PTS:15,
            color:"Mclaren",
            gradiente:"gradMclaren",
            numero:"./img/Numero/3.png",
            textColor:"text-dark"
            },
            {
            nombre:"Fernando",
            apellido: "Alonso",
            equipo:"Alpine",
            logo:"img/LogoE/Alpine.png",
            bandera:"img/BanderasP/Espania.jpg",
            foto:"./img/Pilotos/Alonso.png",
            PTS:18 + 10,
            color:"Alpine",
            gradiente:"gradAlpine",
            numero:"./img/Numero/14.png",
            textColor:"text-white"
            },
            {
            nombre:"Esteban",
            apellido: "Ocon",
            equipo:"Alpine",
            logo:"img/LogoE/Alpine.png",
            bandera:"img/BanderasP/Francia.jpg",
            foto:"./img/Pilotos/Ocon.png",
            PTS:39,
            color:"Alpine",
            gradiente:"gradAlpine",
            numero:"./img/Numero/31.png",
            textColor:"text-white"
            },
            {
            nombre:"Kevin",
            apellido: "Magnussen",
            equipo:"Haas F1 Team",
            logo:"img/LogoE/Haas.png",
            bandera:"img/BanderasP/Dinamarca.jpg",
            foto:"./img/Pilotos/Magnussen.png",
            PTS:15 + 1,
            color:"Haas",
            gradiente:"gradHaas",
            numero:"./img/Numero/20.png",
            textColor: "text-dark"
            },
            {
            nombre:"Mick",
            apellido: "Schumacher",
            equipo:"Haas F1 Team",
            logo:"img/LogoE/Haas.png",
            bandera:"img/BanderasP/Alemania.jpg",
            foto:"./img/Pilotos/Schumacher.png",
            PTS:0+4,
            color:"Haas",
            gradiente:"gradHaas",
            numero:"./img/Numero/47.png",
            textColor: "text-dark"
            },
            {
            nombre:"Lewis",
            apellido: "Hamilton",
            equipo:"Mercedes",
            logo:"img/LogoE/Mercedes.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Hamilton.png",
            PTS:77 + 16,
            color:"Mercedes",
            gradiente:"gradMercedes",
            numero:"./img/Numero/44.png",
            textColor: "text-dark"
            },
            {
            nombre:"George",
            apellido: "Russell",
            equipo:"Mercedes",
            logo:"img/LogoE/Mercedes.png",
            bandera:"img/BanderasP/ReinoUnido.jpg",
            foto:"./img/Pilotos/Russell.png",
            PTS:111,
            color:"Mercedes",
            gradiente:"gradMercedes" ,
            numero:"./img/Numero/63.png",
            textColor: "text-dark"
            },
            {
            nombre:"Yuki",
            apellido: "Tsunoda",
            equipo:"AlphaTauri",
            logo:"img/LogoE/alphatauriv2.png",
            bandera:"img/BanderasP/Japon.jpg",
            foto:"./img/Pilotos/Tsunoda.png",
            PTS:11,
            color:"AlphaTauri",
            gradiente:"gradAlphaTauri",
            numero:"./img/Numero/22.png",
            textColor:"text-white"
            },
            {
            nombre:"Pierre",
            apellido: "Gasly",
            equipo:"AlphaTauri",
            logo:"img/LogoE/alphatauriv2.png",
            bandera:"img/BanderasP/Francia.jpg",
            foto:"./img/Pilotos/Gasly.png",
            PTS:16,
            color:"AlphaTauri",
            gradiente:"gradAlphaTauri",
            numero:"./img/Numero/10.png",
            textColor:"text-white"
            },
            {
            nombre:"Valtteri",
            apellido: "Bottas",
            equipo:"Alfa Romeo",
            logo:"img/LogoE/AlfaRomeo.png",
            bandera:"img/BanderasP/Finlandia.jpg",
            foto:"./img/Pilotos/Bottas.png",
            PTS:46,
            color:"AlfaRomeo",
            gradiente:"gradAlfaRomeo",
            numero:"./img/Numero/77.png",
            textColor:"text-white"
            },
            {
            nombre:"Zhou",
            apellido: "Gaunyu",
            equipo:"Alfa Romeo",
            logo:"img/LogoE/AlfaRomeo.png",
            bandera:"img/BanderasP/China.jpg",
            foto:"./img/Pilotos/Gaunyu.png",
            PTS:5,
            color:"AlfaRomeo",
            gradiente:"gradAlfaRomeo",
            numero:"./img/Numero/24.png",
            textColor:"text-white"
            },
            {
            nombre:"Nicholas",
            apellido: "Latifi",
            equipo:"Williams",
            logo:"img/LogoE/Williams.png",
            bandera:"img/BanderasP/Canada.jpg",
            foto:"./img/Pilotos/Latifi.png",
            PTS:0,
            color:"Williams",
            gradiente:"gradWilliams",
            numero:"./img/Numero/6.png",
            textColor:"text-white"
            },
            {
            nombre:"Alexander",
            apellido: "Albon",
            equipo:"Williams",
            logo:"img/LogoE/Williams.png",
            bandera:"img/BanderasP/Tailandia.jpg",
            foto:"./img/Pilotos/Albon.png",
            PTS:0,
            color:"Williams",
            gradiente:"gradWilliams",
            numero:"./img/Numero/23.png",
            textColor:"text-white"
            },
            {
            nombre:"Sebastian",
            apellido: "Vettel",
            equipo:"Aston Martin",
            logo:"img/LogoE/AstonMartin.png",
            bandera:"img/BanderasP/Alemania.jpg",
            foto:"./img/Pilotos/Vettel.png",
            PTS:13 + 2,
            color:"AstonMartin",
            gradiente:"gradAstonMartin",
            numero:"./img/Numero/5.png",
            textColor:"text-white"
            },
            {
            nombre:"Lance",
            apellido: "Stroll",
            equipo:"Aston Martin",
            logo:"img/LogoE/AstonMartin.png",
            bandera:"img/BanderasP/Canada.jpg",
            foto:"./img/Pilotos/Stroll.png",
            PTS:3,
            color:"AstonMartin",
            gradiente:"gradAstonMartin",
            numero:"./img/Numero/18.png",
            textColor:"text-white"
            }]
    }
})


