// si eres mayor de edad debes enviar un boolean
// que diga true, si eres menor debe decir false
const eresMayorDeEdad = (edad) => {
  if (edad >= 18) return true
  return false
}


module.exports = {
  eresMayorDeEdad
}