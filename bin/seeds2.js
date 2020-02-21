require('dotenv').config()
const mongoose = require('mongoose');
const Film = require('../models/film.model');

const dbName = 'madriz-de-cine';
mongoose.connect(`${process.env.REMOTEDB}`)


const films = [
  {
    title: "Abre los ojos",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944394/abreLosOjos_nlrvzd.jpg",
    year: 1997,
    director: "Alejandro Amenabar",
    actors: [{name:"Eduardo Noriega"}, {name:"Penelope Cruz"}, {name:"Fele Martinez"}, {name:"Najwa Nimri"}],
    genre: "Thriller",
    country: "España",
    duration: "117 min",
    rgument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582274954/madrizDeCine/granVia_z2h2lr.jpg",
    place: "Gran Via",
    coords: {
      lat: 40.420436,
      lng: -3.704041
    } 
  },
  {
    title: "Ultimatum De Bourne",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581606110/sample.jpg",
    year: 2007,
    director: "Paul Greengrass",
    actors: [{name:"Matt Damon"}],
    genre: "Acción",
    country: "Estados Unidos",
    duration: "111 min",
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582274578/madrizDeCine/atocha_i7eu81.jpg",
    place: "Atocha",
    coords: {
      lat: 40.406898,
      lng: -3.690900
    }
  },
  {
    title: "El día de la bestia",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944447/elDiaDeLaBestia_yle7mz.jpg",
    year: 1995,
    director: "Álex de la Iglesia",
    actors: [{name:"Álex Angulo"}, {name:"Santiago Segura"}, {name:"Armando de Razza"}],
    genre: "Comedia de terror",
    country: "España",
    duration: "103 min",
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944595/scheweppes_u3wbat.jpg",
    place: "Plaza de Callao",
    coords: {
      lat: 40.420178,
      lng: -3.706165
    }
  },
  {
    title: "Historias del Kronen",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944480/historiasDelKronen_vkznsw.jpg",
    year: 1995,
    director: "Montxo Armendáriz",
    actors: [{name:"Jordi Mollá"}, {name:"Juan Diego Botto"}],
    genre: "Drama",
    country: "España",
    duration: "91 min",
    argument: "Carlos es un joven estudiante, hijo de una familia acomodada, que apenas ha cumplido veintiún años. Vive de noche, cuando cualquier situación se puede llevar un poco más lejos para transgredir el límite.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582275401/madrizDeCine/juanBravo_r0kgtz.jpg",
    place: "Paso elevado de Juan Bravo",
    coords: {
      lat: 40.433073,
      lng: -3.688247
    }
  },
  {
    title: "La gran familia",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944511/laGranFamilia_ikcpg7.jpg",
    year: 1962,
    director: "Fernando Palacios",
    actors: [{name:"Pepe Isbert"}],
    genre: "Comedia",
    country: "España",
    duration: "104 min",
    argument: "La familia Alonso está compuesta por el matrimonio Carlos y Mercedes, el abuelo y quince hijos, a los que hay que sumar el padrino, un pastelero de grandísimo corazón que siempre está ahí cuando se le necesita. Con tal tamaño de familia, las estrecheces económicas no son de extrañar, ya que el sueldo de aparejador de Carlos llega justito para terminar el mes. Aunque hay muchos cinturones que apretar, hasta logran irse de vacaciones de verano, eso si todos aprueban el curso.a transgredir el límite.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582275561/madrizDeCine/plazaMayor_oewljz.jpg",
    place: "Plaza Mayor",
    coords: {
      lat: 40.415551,
      lng: -3.707395
    }
  },
  {
    title: "Pepi, Luci, Bom y otras chicas del montón",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944554/pepiLuciBom_vduj7a.jpg",
    year: 1982,
    director: "Pedro Almodóvar",
    actors: [{name:"Carmen Maura"}, {name:"Alaska"}, {name:"Eva Silva"}],
    genre: "Comedia",
    country: "España",
    duration: "80 min",
    argument: "Luci, un ama de casa abnegada, Pepi, su vecina moderna, y Bom, una rockera diabólica forman un trío disparatado que vive al ritmo desacompasado de La Movida. La violación de Pepi modifica el destino de todos los personajes.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582273846/madrizDeCine/malasan%CC%83a_hktezp.jpg",
    place: "Malasaña",
    coords: {
      lat: 40.426691,
      lng: -3.707060
    }
  },
  {
    title: "Las bicicletas son para el verano",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944523/lasBicicletasSonParaElVerano_lvrxpz.jpg",
    year: 1994,
    director: "Jaime Chávarri",
    actors: [{name:"Gabino Diego"},{name:"Marisa Paredes"}, {name:"Emilio Gutierrez Caba"}, {name:"Victoria Abril"}],
    genre: "Drama",
    country: "España",
    duration: "103 min",
    argument: "El 18 de julio de 1936, estalla la Guerra Civil. En Madrid, una familia formada por un matrimonio y dos hijos comparte los avatares de la guerra con la criada y los vecinos. El niño de la casa, aunque ha suspendido, quiere que su padre le compre una bicicleta, pero la guerra hará que la compra se aplace indefinidamente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582273981/madrizDeCine/retiro_jfzhn7.jpg",
    place: "El Retiro",
    coords: {
      lat: 40.416986,
      lng: -3.684795
    }
  },
  {
    title: "Barrio",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944434/barrio_g5yg97.jpg",
    year: 1998,
    director: "Fernando León de Aranoa",
    actors: [{name:"Críspulo Cabezas"}, {name:"Timy Benito"}, {name:"Eloi Yebra"}],
    genre: "Drama",
    country: "España",
    duration: "94 min",
    argument: "En uno de esos barrios situados al sur de las grandes ciudades, a los que no llega ni el metro ni el dinero, Javi, Manu y Rai son compañeros de instituto, pero, sobre todo, amigos. Tienen esa edad en la que ni se es hombre ni se es niño, en la que se habla mucho de chicas y muy poco con ellas. Comparten también la vida en el barrio, el calor del verano y un montón de problemas.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582274622/madrizDeCine/anden0_jnevir.jpg",
    place: "Estación fantasma Chamberi",
    coords: {
      lat: 40.432387,
      lng: -3.697700
    }
  },
  ,
  {
    title: "El Bola",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1582273887/madrizDeCine/elBola_nxej1g.jpg",
    year: 2000,
    director: "Achero Mañas",
    actors: [{name:"Juan José Ballesta"}, {name:"Pablo Galán"}],
    genre: "Drama",
    country: "España",
    duration: "88 min",
    argument: "El Bola es un chaval de 12 años que vive en una atmósfera violenta y sórdida. Su situación familiar, que oculta avergonzado, le incapacita para relacionarse y comunicarse con otros chicos. La llegada de un nuevo compañero al colegio le brinda la oportunidad de descubrir la amistad y una realidad familiar completamente distinta. Todo ello le dará la fuerza necesaria para aceptar y, además, afrontar su propia situación.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582273764/madrizDeCine/sanIsidro_jikfvr.jpg",
    place: "San Isidro",
    coords: {
      lat: 40.399540,
      lng: -3.738604
    }
  },
  {
    title: "Stockholm",
    poster: "https://res.cloudinary.com/dw1febtea/image/upload/v1582276287/madrizDeCine/stockholm_nkytfz.jpg",
    year: 2013,
    director: "Rodrigo Sorogoyen",
    actors: [{name:"Javier Pereira"}, {name:"Aura Garrido"}, {name:" Lorena Mateo"}, {name:"Jesús Caba"}, {name:"Susana Abaitua"}],
    genre: "Romance",
    country: "España",
    duration: "90 min",
    argument: "Una noche, en una discoteca, ves a una chica, te enamoras de manera fulminante y se lo dices. Aunque no te hace mucho caso, pasas con ella el resto de la noche. ¿Qué ocurriría si, al día siguiente, no fuera la chica que parecía ser? Una noche, en una discoteca, se te acerca el típico chico que dice que se ha enamorado de ti. No le haces caso, pero después compruebas que no es el típico plasta, es simpático, encantador y realmente se ha enamorado de ti; así que pasas el resto de la noche con él. ¿Qué ocurriría si al día siguiente no fuera en absoluto el chico que parecía ser?",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1582276551/madrizDeCine/desengan%CC%83o_sn2srh.jpg",
    place: "Calle Desengaño",
    coords: {
      lat: 40.4209895,
      lng: -3.738604
    }
  }
]


Film.create(films, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${films.length} films`)
  mongoose.connection.close()
})