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
