const { sumaleUnoACadaElemento } = require("../bucles")

describe("sumarle 1 cada elemento del array", () => {
  it("2 y 3 deben ser 3 y 4", () => {
    expect(sumaleUnoACadaElemento([2, 3])).toBe([3, 4])
  })
  it("los 4 elementos deben aumentar solo en 1", () => {
    expect(sumaleUnoACadaElemento([1, 2, 3, 4])).toBe([2, 3, 4, 5])
  })
})