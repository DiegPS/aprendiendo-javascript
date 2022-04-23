const { eresMayorDeEdad } = require("../condicionales")

test("Debes saber si es mayor de edad o no", () => {
  expect(eresMayorDeEdad(15)).toBe(false)
})