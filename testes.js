// Postagem

// Alterar o conteúdo de um elemento
const element1 = document.getElementById("myElement");
element1.textContent = "New content";

// Adicionar um evento de clique a um botão
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Clicked the button!");
});

// Criar um novo elemento e adicioná-lo ao DOM
const newElement = document.createElement("div");
newElement.textContent = "Newly created element";
document.body.appendChild(newElement);

// Alterar o estilo de um elemento
const element2 = document.getElementById("myOtherElement");
element2.style.backgroundColor = "red";
element2.style.color = "white";

// Remover um elemento do DOM
const element3 = document.getElementById("elementToRemove");
element3.parentNode.removeChild(element3);

// Ocultar um elemento
const elementToHide = document.getElementById("hiddenElement");
elementToHide.style.display = "none";

// Adicionar classes a um elemento
const myElement = document.getElementById("myElement");
myElement.classList.add("class1", "class2");

// Obter o valor de um input
const myInput = document.getElementById("myInput");
const value = myInput.value;
console.log(value);
///

const bananinha = "bananinha";

console.log(bananinha.length); // Retorna o tamanho da string: 9
console.log(bananinha.includes("na")); // Verifica se a string contém a substring "na": true
console.log(bananinha.indexOf("ni")); // Retorna o índice da primeira ocorrência da substring "ni": 4
console.log(bananinha.startsWith("ban")); // Verifica se a string começa com a substring "ban": true
console.log(bananinha.endsWith("nha")); // Verifica se a string termina com a substring "nha": true
console.log(bananinha.slice(2, 6)); // Retorna uma parte da string a partir do índice 2 até o índice 5: "nani"
console.log(bananinha.toUpperCase()); // Converte a string para maiúsculas: "BANANINHA"
console.log(bananinha.toLowerCase()); // Converte a string para minúsculas: "bananinha"
console.log(bananinha.replace("na", "va")); // Substitui a primeira ocorrência da substring "na" por "va": "bavaninha"
console.log(bananinha.repeat(3)); // Repete a string três vezes: "bananinhabananinhabananinha"
console.log(bananinha.trim()); // Remove os espaços em branco no início e no final da string: "bananinha"
console.log(bananinha.split("a")); // Divide a string em um array de substrings utilizando "a" como separador: ["b", "n", "ninh", ""]

