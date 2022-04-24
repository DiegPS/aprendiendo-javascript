const { largoDeArray,
  agregarAlFinalDelArray,
  agregarAlInicioDelArray,
  eliminaAlFinalDelArray,
  eliminaAlInicioDelArray } = require("../arrays")
describe("que tan largo es el array", () => {
  it("debe ser 4", () => {
    expect(largoDeArray([1, 2, 3, 4])).toBe(4)
  })
  it("debe ser 3", () => {
    expect(largoDeArray([1, 2, 3])).toBe(3)
  })
})
describe("agrega un elemento al final del array", () => {
  it("agrega 4 al final del array", () => {
    expect(agregarAlFinalDelArray([1, 2, 3], 4)).toBe([1, 2, 3, 4])
  })
})
describe("agrega un elemento al inicio del array", () => {
  it("agrega 1 al inicio del array", () => {
    expect(agregarAlInicioDelArray([2, 3, 4]), 1).toBe([1, 2, 3, 4])
  })
})
describe("elimina un elemento al final del array", () => {
  it("deben ser solo 3 elementos en el array", () => {
    expect(eliminaAlFinalDelArray([1, 2, 3, 4])).toBe([1, 2, 3])
  })
})
describe("elimina el primer elemento del array", () => {
  it("debe tener solo 4 elementos", () => {
    expect(eliminaAlInicioDelArray([0, 1, 2, 3, 4])).toBe([1, 2, 3, 4])
  })
})