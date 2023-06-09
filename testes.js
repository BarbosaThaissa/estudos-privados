// Postagem


//Alterar o conteúdo de um elemento
const element1 = document.getElementById("meuElemento");
element1.textContent = "Novo conteúdo";

//Adicionar um evento de clique a um botão
const button = document.getElementById("meuBotao");
button.addEventListener("click", function() {
  alert("Clicou no botão!");
});

//Criar um novo elemento e adicioná-lo ao DOM
const newElement = document.createElement("div");
newElement.textContent = "Novo elemento criado";
document.body.appendChild(newElement);

//Alterar o estilo de um elemento
const elemento2 = document.getElementById("meuOutroElemento");
elemento2.style.backgroundColor = "red";
elemento2.style.color = "white";

//Remover um elemento do DOM
const elemento3 = document.getElementById("elementoParaRemover");
elemento3.parentNode.removeChild(elemento3);

//Alterar o atributo src de uma imagem
const minhaImagem = document.getElementById("imagem");
minhaImagem.src = "caminho/para/imagem.jpg";

//Ocultar um elemento
const elementoParaOcultar = document.getElementById("elementoOculto");
elementoParaOcultar.style.display = "none";

//Adicionar classes a um elemento
const meuElemento = document.getElementById("meuElemento");
meuElemento.classList.add("classe1", "classe2");

//Obter o valor de um campo de formulário
const meuInput = document.getElementById("meuInput");
const valor = meuInput.value;
console.log(valor);

//Modificar o conteúdo HTML de um elemento
const elementoHTML = document.getElementById("elementoHTML");
elementoHTML.innerHTML = "<h1>Novo conteúdo HTML</h1>";

// Exemplo 8: Verificar se um elemento possui uma classe
const meuElemento2 = document.getElementById("meuElemento2");
if (meuElemento2.classList.contains("minhaClasse")) {
  console.log("O elemento possui a classe 'minhaClasse'");
}
