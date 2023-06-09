// Postagem
// Exemplo 1: Alterar o conteúdo de um elemento
const elemento1 = document.getElementById("meuElemento");
elemento1.textContent = "Novo conteúdo";

// Exemplo 2: Adicionar um evento de clique a um botão
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
  alert("Clicou no botão!");
});

// Exemplo 3: Criar um novo elemento e adicioná-lo ao DOM
const novoElemento = document.createElement("div");
novoElemento.textContent = "Novo elemento criado";
document.body.appendChild(novoElemento);

// Exemplo 4: Alterar o estilo de um elemento
const elemento2 = document.getElementById("meuOutroElemento");
elemento2.style.backgroundColor = "red";
elemento2.style.color = "white";

// Exemplo 5: Remover um elemento do DOM
const elemento3 = document.getElementById("elementoParaRemover");
elemento3.parentNode.removeChild(elemento3);

// Exemplo 1: Selecionar elementos por classe
const elementos = document.getElementsByClassName("minhaClasse");
for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.fontWeight = "bold";
}

// Exemplo 2: Alterar o atributo src de uma imagem
const minhaImagem = document.getElementById("imagem");
minhaImagem.src = "caminho/para/imagem.jpg";

// Exemplo 3: Ocultar um elemento
const elementoParaOcultar = document.getElementById("elementoOculto");
elementoParaOcultar.style.display = "none";

// Exemplo 4: Adicionar classes a um elemento
const meuElemento = document.getElementById("meuElemento");
meuElemento.classList.add("classe1", "classe2");

// Exemplo 5: Obter o valor de um campo de formulário
const meuInput = document.getElementById("meuInput");
const valor = meuInput.value;
console.log(valor);

// Exemplo 6: Navegar na árvore DOM
const pai = document.getElementById("pai");
const primeiroFilho = pai.firstElementChild;
const proximoIrmao = primeiroFilho.nextElementSibling;

// Exemplo 7: Modificar o conteúdo HTML de um elemento
const elementoHTML = document.getElementById("elementoHTML");
elementoHTML.innerHTML = "<h1>Novo conteúdo HTML</h1>";

// Exemplo 8: Verificar se um elemento possui uma classe
const meuElemento2 = document.getElementById("meuElemento2");
if (meuElemento2.classList.contains("minhaClasse")) {
  console.log("O elemento possui a classe 'minhaClasse'");
}

// Exemplo 9: Definir um atributo personalizado
const meuElemento3 = document.getElementById("meuElemento3");
meuElemento3.setAttribute("data-info", "Informação personalizada");

// Exemplo 10: Manipular estilos CSS com classes
const elementoComClasse = document.getElementById("elementoComClasse");
elementoComClasse.classList.add("destaque");
elementoComClasse.classList.remove("destaque");
