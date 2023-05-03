let teste = 5;

const pedido = {
  cliente: "Joao",
  endereco: "Rua B, 456",
  itens: [
    { nome: "Hamburuer", preco: 15 },
    { nome: "Batata frita", preco: 8 },
  ],
  taxaEntrega: 5.0,
};

const pedidos = (client, end, qtdItens, iten) => {
  let result = iten.map((sum) => {
    teste += sum.preco;
  });

  return `Pedido: ${client} \n Endereco de entrega: ${end} \n Total: R$ ${teste.toFixed(
    2
  )}`;
};

console.log(teste.toFixed(2));
console.log(pedidos(pedido.cliente, pedido.endereco, 2, pedido.itens));
//EXERCIO 2
const pedidoEx2 = {
  cliente: {
    nome: gets().trim(),      
    endereco: gets().trim(), 
  },
  id: parseInt(gets().trim()),
};

pedidoEx2.cliente.telefone = gets().trim().replace(/[^0-9]/g, '').replace(/(\d{4})(\d{4})/, '$1-$2');


console.log(
  myFunction(
    pedido.cliente.nome,
    pedido.cliente.endereco,
    pedido.id,
    pedido.cliente.telefone // Use a propriedade "telefone" em vez de "tele".
  )
);

const myFunction = (client, end, id, tel) => {
  return `Cliente: ${client}, ${end} \n ID: ${id} \n Tel: ${tel}`;
};

console.log(
  myFunction(
    pedidoEx2.cliente.nome,
    pedidoEx2.cliente.endereco,
    pedidoEx2.id,
    pedidoEx2.cliente.telefone
  )
);



// Saída esperada:
// Cliente: Joao, Rua ABC, 9
// ID: 99
// Tel: 5555-0000
// Sua Saída:
// Cliente: Joao, Rua ABC, 9
// ID: 99
// Tel: 5555-8888
