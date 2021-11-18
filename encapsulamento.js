// Estrutural

let altura = 50;
let largura = 50;

function calcularArea() {
  return altura * largura;
}

let area = calcularArea();

// Orientado a Objetos

class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.#calcularArea();
  }

  #calcularArea() {
    return this.altura * this.largura;
  }
}

// Criar o objeto
let poligono = new Poligono(50, 50);
console.log(poligono);
