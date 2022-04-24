const { eresMayorDeEdad, queNumeroEsMayor } = require("../condicionales")

describe("Debes saber si es mayor de edad o no", () => {
  it("15 es menor de edad debe ser false", () => {
    expect(eresMayorDeEdad(15)).toBe(false)
  })
  it("18 es mayor de edad", () => {
    expect(eresMayorDeEdad(18)).toBe(true)
  })
  it("100 años es mayor de edad", () => {
    expect(eresMayorDeEdad(100)).toBe(true)
  })
})

describe("Debes indentificar que numero es mayor", () => {
  it("13 es mayor que 10", () => {
    expect(queNumeroEsMayor(13, 10)).toBe(13)
  })
  it("1 es menor que 20", () => {
    expect(queNumeroEsMayor(1, 20)).toBe(20)
  })
})