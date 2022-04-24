/* IMPORTAMOS AXIOS */
const axios = require("axios")

/* ESTOS DOS SON LO MISMO */
// axios.get("url de la pagina web")
// axios("url de la pagina web")

// axios.get("https://pokeapi.co/api/v2/pokemon/pikachu") // SON LO MISMO

// axios("https://pokeapi.co/api/v2/pokemon/pikachu") // POR DEFECTO AXIOS HACE UN GET

// axios devuelve varias cosas el codigo de estado por ejemplo 200 si fue existoso
async function peticionConAsyncAwait() {
  const peticionAxios = await axios("https://pokeapi.co/api/v2/pokemon/pikachu")
  console.log(peticionAxios.status) // el codigo de estatus de la peticion
  console.log(peticionAxios.data) // la informacion de la peticion
}

// ejecutamos la funcion para ver el resultado enla consola
// peticionConAsyncAwait() RECUERDA EJECUTARLA SI NO, NO APARECERA NADA EN LA CONSOLA.

function peticionConPromesas() {
  axios("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(function peticionAxios(respuestaDeLaPeticion) {
      console.log(respuestaDeLaPeticion.status)
      console.log(respuestaDeLaPeticion.data)
    })
}
// peticionConPromesas() // RECUERDA DESCOMENTARLO


/* FORMAS CORTAS DE HACERLO */

// CON PROMESAS
axios("https://pokeapi.co/api/v2/pokemon/pikachu").then(({ data, status }) => console.log(status, data))

// CON ASYNC (siempre es necesario una funcion(excepto con top level await))
const p = async () => {
  const { status, data } = await axios("https://pokeapi.co/api/v2/pokemon/pikachu")
  console.log(status, data)
}
// p()
