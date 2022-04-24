// importamos la libreria express
import express from "express"
// guardamos la ejecicion de express
//en una constante llamada app
const app = express()
// le decimos app usa el "express.json()"
// ese express.json() te permite transformar
// lo que recibes en el body a un json
app.use(express.json())

// decimos cuando app reciba una peticion GET en la ruta
// "/nombredelaruta" debes responder un hola
app.get("/nombredelaruta", function (peticion, respuesta) {
  respuesta.send("<h1>para poder verme necesitas entrar a localhost:3000/nombredelaruta </h1>")
})

const html = `
<h1>Esta es la ruta principal</h1>
<a href="http://localhost:3000/">Ruta principal</a>
</br>
<a href="http://localhost:3000/nombredelaruta">Ruta nombredelaruta</a>
`
app.get("/", function (peticion, respuesta) {
  respuesta.send(html)
})

// le decimos app escucha en el puerto 3000
// esto permite crear la aplicacion en el
// htttp://localhost:3000
app.listen(3000)
