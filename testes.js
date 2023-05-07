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

console.log('EX 1 \n \n', pedidos(pedido.cliente, pedido.endereco, 2, pedido.itens));

//EXERCIO 2
const pedidoEx2 = {
  cliente: {
    nome: 'maria',      
    endereco: "Rua B, 456", 
  },
  id: 666,
};

let num = '55550000'

pedidoEx2.cliente.telefone = num.trim().replace(/[^0-9]/g, '').replace(/(\d{4})(\d{4})/, '$1-$2');

const myFunction = (client, end, id, tel) => {
  return `Cliente: ${client}, ${end} \n ID: ${id} \n Tel: ${tel}`;
};

console.log('EX 2 \n \n',
  myFunction(
    pedidoEx2.cliente.nome,
    pedidoEx2.cliente.endereco,
    pedidoEx2.id,
    pedidoEx2.cliente.telefone
  )
);

// EXERCIO 3
const objeto1 = { nome: "João", idade: 25 };
const objeto2 = { nome: "Maria", idade: 30 };

function compararObjetos(obj1, obj2) {
  // Verifica se os objetos têm a mesma quantidade de propriedades
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return "Os objetos são diferentes.";
  }

  // Itera sobre as propriedades do objeto1
  for (let propriedade in obj1) {
    // Verifica se o objeto2 possui a mesma propriedade
    if (!obj2.hasOwnProperty(propriedade)) {
      return "Os objetos são diferentes.";
    }

    // Verifica se os valores da propriedade são iguais
    if (obj1[propriedade] !== obj2[propriedade]) {
      return "Os objetos são diferentes.";
    }
  }

  // Se não houver diferenças encontradas, os objetos são iguais
  return "Os objetos são iguais.";
}

console.log('EX 3 \n \n', compararObjetos(objeto1, objeto2));

//EXERCIO 4

const restaurantes = [
  {
    nome: 'Bar do Zé ', 
    avaliacao: 3.5
  },
  {
    nome: 'Pizza Boa', 
    avaliacao: 4.2
  }
];

const qualMelhor = (rest1, rest2) => {
  let result = rest1.avaliacao > rest2.avaliacao ? rest1 : rest2;
  
  return `Restaurante: ${result.nome}, Avaliacao: ${result.avaliacao.toFixed(1)}`; 
}

console.log('EX 4 \n \n', qualMelhor(restaurantes[0], restaurantes[1]))
