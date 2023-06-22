// keys(): Retorna um array contendo as chaves do objeto.
const objKeys = { name: "John", age: 30, city: "New York" };
const keys = Object.keys(objKeys);
console.log(keys); // Saída: ["name", "age", "city"]

// entries(): Retorna um array contendo pares chave-valor do objeto.
const objEntries = { name: "John", age: 30, city: "New York" };
const entries = Object.entries(objEntries);
console.log(entries); // Saída: [["name", "John"], ["age", 30], ["city", "New York"]]
