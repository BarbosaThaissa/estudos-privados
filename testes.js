// EXERCIO 3
const objeto1 = { nome: "João", idade: 25 };
const objeto2 = { nome: "Maria", idade: 30 };

function compararObjetos(obj1, obj2) {
  // Verifica se os objetos têm a mesma quantidade de propriedades
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return "Os objetos são diferentes.";
  }

  // Itera sobre as propriedades do objeto1
  for (let propriedade in obj1) {
    // Verifica se o objeto2 possui a mesma propriedade
    if (!obj2.hasOwnProperty(propriedade)) {
      return "Os objetos são diferentes.";
    }

    
