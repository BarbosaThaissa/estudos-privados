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

