const mongoose = require('mongoose');
const Film = require('../models/film.model');

const dbName = 'madriz-de-cine';
mongoose.connect(`mongodb://localhost/${dbName}`)



const films = [
  {
    title: "Abre los ojos",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944394/abreLosOjos_nlrvzd.jpg",
    year: 1997,
    director: "Alejandro Amenabar",
    actors: ["Eduardo Noriega", "Penelope Cruz", "Fele Martinez", "Najwa Nimri"],
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944470/granVia_cwkzyz.jpg",
    place: "Gran Via",
    coords: {
      lat: 40.420436,
      lng: -3.704041
    } 
  },
  {
    title: "Ultimatum De Bourne",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581606110/sample.jpg",
    year: 2007,
    director: "Paul Greengrass",
    actors: ["Matt Damon"],
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944425/atocha_zcfr1o.jpg",
    place: "Atocha",
    coords: {
      lat: 40.406898,
      lng: -3.690900
    }
  },
  {
    title: "El día de la bestia",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944447/elDiaDeLaBestia_yle7mz.jpg",
    year: 1995,
    director: "Álex de la Iglesia",
    actors: ["Álex Angulo", "Santiago Segura", "Armando de Razza"],
    argument: "Un hombre desfigurado se encuentra entre un sueño y la realidad cuando recuerda los eventos de su accidente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944595/scheweppes_u3wbat.jpg",
    place: "Plaza de Callao",
    coords: {
      lat: 40.420436,
      lng: -3.704041
    }
  },
  {
    title: "Historias del Kronen",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944480/historiasDelKronen_vkznsw.jpg",
    year: 1995,
    director: "Montxo Armendáriz",
    actors: ["Jordi Mollá", "Juan Diego Botto"],
    argument: "Carlos es un joven estudiante, hijo de una familia acomodada, que apenas ha cumplido veintiún años. Vive de noche, cuando cualquier situación se puede llevar un poco más lejos para transgredir el límite.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944490/juanBravo_dbzhb6.jpg",
    place: "Paso elevado de Juan Bravo",
    coords: {
      lat: 40.433073,
      lng: -3.688247
    }
  },
  {
    title: "La gran familia",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944511/laGranFamilia_ikcpg7.jpg",
    year: 1962,
    director: "Fernando Palacios",
    actors: ["Pepe Isbert"],
    argument: "La familia Alonso está compuesta por el matrimonio Carlos y Mercedes, el abuelo y quince hijos, a los que hay que sumar el padrino, un pastelero de grandísimo corazón que siempre está ahí cuando se le necesita. Con tal tamaño de familia, las estrecheces económicas no son de extrañar, ya que el sueldo de aparejador de Carlos llega justito para terminar el mes. Aunque hay muchos cinturones que apretar, hasta logran irse de vacaciones de verano, eso si todos aprueban el curso.a transgredir el límite.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944570/plazaMayor_bjiwkw.jpg",
    place: "Plaza Mayor",
    coords: {
      lat: 40.415551,
      lng: -3.707395
    }
  },
  {
    title: "Pepi, Luci, Bom y otras chicas del montón",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944554/pepiLuciBom_vduj7a.jpg",
    year: 1982,
    director: "Pedro Almodóvar",
    actors: ["Carmen Maura", "Alaska", "Eva Silva"],
    argument: "Luci, un ama de casa abnegada, Pepi, su vecina moderna, y Bom, una rockera diabólica forman un trío disparatado que vive al ritmo desacompasado de La Movida. La violación de Pepi modifica el destino de todos los personajes.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944542/malasan%CC%83a_u77bks.jpg",
    place: "Malasaña",
    coords: {
      lat: 40.426691,
      lng: -3.707060
    }
  },
  {
    title: "Las bicicletas son para el verano",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944523/lasBicicletasSonParaElVerano_lvrxpz.jpg",
    year: 1994,
    director: "Jaime Chávarri",
    actors: ["Gabino Diego", "Marisa Paredes", "Emilio Gutierrez Caba", "Victoria Abril"],
    argument: "El 18 de julio de 1936, estalla la Guerra Civil. En Madrid, una familia formada por un matrimonio y dos hijos comparte los avatares de la guerra con la criada y los vecinos. El niño de la casa, aunque ha suspendido, quiere que su padre le compre una bicicleta, pero la guerra hará que la compra se aplace indefinidamente.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944586/retiro_asfdky.jpg",
    place: "El Retiro",
    coords: {
      lat: 40.416986,
      lng: -3.684795
    }
  },
  {
    title: "Barrio",
    cartel: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944434/barrio_g5yg97.jpg",
    year: 1998,
    director: "Fernando León de Aranoa",
    actors: ["Críspulo Cabezas", "Timy Benito", "Eloi Yebra"],
    argument: "En uno de esos barrios situados al sur de las grandes ciudades, a los que no llega ni el metro ni el dinero, Javi, Manu y Rai son compañeros de instituto, pero, sobre todo, amigos. Tienen esa edad en la que ni se es hombre ni se es niño, en la que se habla mucho de chicas y muy poco con ellas. Comparten también la vida en el barrio, el calor del verano y un montón de problemas.",
    image: "https://res.cloudinary.com/dw1febtea/image/upload/v1581944413/anden0_wa5wwi.jpg",
    place: "Estación fantasma Chamberi",
    coords: {
      lat: 40.432387,
      lng: -3.697700
    }
  }
]


Film.create(films, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${films.length} films`)
  mongoose.connection.close()
})