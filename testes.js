// Postagem

//Math metodos

// Exemplo do método JSON.stringify()
const obj = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(obj);

console.log(jsonString); // Saída: '{"name":"John","age":30,"city":"New York"}'

// Exemplo do método JSON.parse()
const stringJson = '{"name":"John","age":30,"city":"New York"}';
const parsedObj = JSON.parse(jsonString);

console.log(parsedObj); // Saída: { name: "John", age: 30, city: "New York" }
