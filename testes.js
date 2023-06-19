// Postagem

//Numeros metodos

// toFixed(): Retorna uma string representando o número com um número fixo de casas decimais.
const num = 3.14159;
console.log(num.toFixed(2)); // Saída: "3.14"

// toPrecision(): Retorna uma string representando o número com a precisão especificada.
const num2 = 123.456789;
console.log(num2.toPrecision(5)); // Saída: "123.46"

// toString(): Retorna uma string representando o número na base especificada (por exemplo, binário, hexadecimal, etc.).
const num3 = 42;
console.log(num3.toString(2)); // Saída: "101010"

// parseInt(): Converte uma string em um número inteiro na base especificada.
const binaryString = "101010";
console.log(parseInt(binaryString, 2)); // Saída: 42

// parseFloat(): Converte uma string em um número de ponto flutuante.
const floatString = "3.14";
console.log(parseFloat(floatString)); // Saída: 3.14

// isNaN(): Verifica se um valor é NaN (Not-a-Number).
const value1 = 42;
const value2 = "not a number";
console.log(isNaN(value1)); // Saída: false
console.log(isNaN(value2)); // Saída: true
