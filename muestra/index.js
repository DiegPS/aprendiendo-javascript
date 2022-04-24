/* IMPORTAMOS LO QUE USAREMOS */
import express from "express"
import cors from "cors"
import morgan from "morgan"
import html from "./html.js"
/* INICIAMOS EXPRESS */
const app = express()
/* MIDDLEWARES */
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
/* RUTAS */
app.get("/", function (peticion, respuesta) {
  respuesta.send(html)
})
/* INICIO SERVIDOR */
app.listen(3000)