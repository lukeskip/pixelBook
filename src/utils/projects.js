const projects = [
  {
    id:1,
    title: "Knobs",
    description:{
      es:"Creé esta plataforma para conectar músicos independientes con productores y músicos profesionales para que estos últimos los aconsejen para hacer crecer su proyecto a cambio de un incentivo económico. La idea creativa es mía y desarrollé el diseño utilizando Adobe XD y desarrollé el sistema con PHP (Laravel)",
      en:"I created this platform to connect independent musicians with professional producers so these ones can advise and review their songs technically, in exchange of a payment. The creative idea is mine and for the UI I used Adobe XD and Laravel for the system.",
    },
    image: "/img/portfolio-knobs.png",
    screenCapture:"/src/assets/img/capture-knobs-1.jpg",
    backgroundImage: "/src/assets/img/back-knobs.jpg",
    tags: ["PHP", "Laravel", "Javascript", "Adobe XD"],
    gitHub:"https://github.com/lukeskip/knobs",
    tryIt:"https://knobs.reydecibel.com.mx/"
  },
  {
    id:2,
    title: "EnsayoPro",
    description:{
      es:"Esta plataforma busca convertirse en una especie de AirBnB pero de salas de ensayo, que son rentadas en por toda la Ciudad de México por músicos independientes. la idea es adaptar una idea de negocio conocida a un mercado en el que no se había ocupado: construí el diseño utilizando Adobe XD y desarrollé el sistemacon PHP (Laravel) y por supuesto una buena dosis de JavaScript",
      en:"This is a platform AirBnB alike but that covers the rent of rehearsal spaces that independen musicians use. I used Adobe XD  to design the UI and Laravel (PHP) for the system.",
    },   
    image: "/img/portfolio-ensayo-pro.png",
    screenCapture:"/src/assets/img/capture-ensayo-pro-1.jpg",
    backgroundImage: "/src/assets/img/back-ensayo-pro.jpg",
    tags: ["PHP", "Laravel", "Javascript", "JQuery"],
    gitHub:"https://github.com/lukeskip/ensayoPro",
    tryIt:"https://ensayopro.chekogarcia.com.mx/"
  },
  {
    id:3,
    title: "Playlists",
    description:{
      es:"Esta sencilla plataforma, es la más exitosa de los assets de un proyecto más grande llamado Rey Decibel. En ella los seguidores de Rey decibel, quienes son músicos independientes, pueden registrarse en las playlist que esta comunidad tiene en Spotify gratuitamente o en su versión premium con un pago. La plataforma cuenta está creada con una interfaz step-by-step generada con JavaScript y JQuery que corre en un soporte de PHP (Laravel), cuenta con auteticación por vía Spotify y obtiene información de la API de Spotify",
      en:"Esta sencilla plataforma, es la más exitosa de los assets de un proyecto más grande llamado Rey Decibel. En ella los seguidores de Rey decibel, quienes son músicos independientes, pueden registrarse en las playlist que esta comunidad tiene en Spotify gratuitamente o en su versión premium con un pago. La plataforma cuenta está creada con una interfaz step-by-step generada con JavaScript y JQuery que corre en un soporte de PHP (Laravel), cuenta con auteticación por vía Spotify y obtiene información de la API de Spotify"
    },
    image: "/img/portfolio-playlist.png",
    backgroundImage: "/src/assets/img/back-playlists.jpg",
    screenCapture:"/src/assets/img/capture-playlist-1.jpg",
    tags: ["PHP", "Laravel", "Javascript", "JQuery"],
    gitHub:"https://github.com/lukeskip/playlists",
    tryIt:"https://playlist.reydecibel.com.mx/"
  },
  {
    id:4,
    title: "Torticaja",
    description: {
      es:"Esta es una plataforma tipo punto de venta desarrollado específicamente para funcionar bajo las necesidades de una tortillería. Se trata de un proyecto que inició como una necesidad inmediata y se convirtió en una plataforma para su venta generalizada, cuyo desarrollo está en proceso bajo el nombre de TortiCaja.",
      en:"This is a Point Of Sale platform but designed specifically for tortillería shop, a very common bussiness in Mexico. It helps of course to register the sales of the shop, but more importantly to monitor the raw material used to make the tortillas, which is basically what makes this particular management difficult. "
    },
    image: "/img/portfolio-playlist.png",
    backgroundImage: "/src/assets/img/back-torticaja.jpg",
    screenCapture:"/src/assets/img/capture-torticaja-1.jpg",
    tags: ["PHP", "Laravel", "Javascript", "JQuery"],
    gitHub:"https://github.com/lukeskip/torticajaApp",
    tryIt:""
  },
  
];

export default projects;
