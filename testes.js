// Postagem

/// keys(): Retorna um array contendo as chaves do objeto.
const objKeys = { name: "John", age: 30, city: "New York" };
const keys = Object.keys(objKeys);
console.log(keys); // Saída: ["name", "age", "city"]

// values(): Retorna um array contendo os valores do objeto.
const objValues = { name: "John", age: 30, city: "New York" };
const values = Object.values(objValues);
console.log(values); // Saída: ["John", 30, "New York"]

// entries(): Retorna um array contendo pares chave-valor do objeto.
const objEntries = { name: "John", age: 30, city: "New York" };
const entries = Object.entries(objEntries);
console.log(entries); // Saída: [["name", "John"], ["age", 30], ["city", "New York"]]

// hasOwnProperty(): Verifica se o objeto possui uma propriedade específica.
const objProperty = { name: "John", age: 30, city: "New York" };
console.log(objProperty.hasOwnProperty("name")); // Saída: true

