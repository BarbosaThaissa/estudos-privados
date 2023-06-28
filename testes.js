// Exemplo de utilização dos métodos do objeto console

// Limpa o console
console.clear();

// Exibe uma mensagem no console
console.log("Hello World!");

// Exibe uma mensagem de erro no console
console.error("Mensagem de erro");

// Exibe uma mensagem de aviso no console
console.warn("Mensagem de aviso");

// Exemplo de uso do console.table()
const users = [
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];
console.table(users);

// Exemplo de uso do console.group()
console.group("Informações do Usuário");
console.log("Nome: John");
console.log("Idade: 30");
console.groupEnd();

// Exemplo de uso do console.time()
console.time("Tempo de execução");
// Código a ser medido o tempo de execução
console.timeEnd("Tempo de execução");

// Exibe o rastreamento de pilha
console.trace("Mensagem de rastreamento de pilha");

