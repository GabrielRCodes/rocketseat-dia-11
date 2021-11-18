// Função impura
// Exemplo 1: Está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}
// Exemplo 2: Está alterando um dado externo
let person = {
  name: "Rafael Camarda",
  age: "jovem",
};

function changeName(name) {
  person.name = name;
}

// Função pura
// Exemplo 1
const calculateCircumference = function (pi, radius) {
  return pi * (radius + radius);
};

// com arrow funtion
const calculateCircumference = (pi, radius) => pi * (radius + radius);

// Exemplo 2
const changePersonName = (person, name) => ({ ...person, name });
