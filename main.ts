//EXERCIO 2
interface ObjetoClientEx2 {
  nome: string;
  endereco: string;
  telefone?: string;
}
interface PedidosgEx2 {
  cliente: ObjetoClientEx2;
  id: number;
}

const pedidoEx23: PedidosgEx2 = {
  cliente: {
    nome: "maria",
    endereco: "Rua B, 456",
  },
  id: 666,
};

let nume: string = "55550000";

pedidoEx23.cliente.telefone = nume
  .trim()
  .replace(/[^0-9]/g, "")
  .replace(/(\d{4})(\d{4})/, "$1-$2");

const myFunctionTs = (client: string, end: string, id: number, tel: string) => {
  return `Cliente: ${client}, ${end} \n ID: ${id} \n Tel: ${tel}`;
};

console.log(
  "EX 2, arquivo TypeScript \n \n",
  myFunctionTs(
    pedidoEx23.cliente.nome,
    pedidoEx23.cliente.endereco,
    pedidoEx23.id,
    pedidoEx23.cliente.telefone
  )
);

//EXERCIO 4
interface RestaurantesEx4 {
  nome: string;
  avaliacao: number;
}

const restaurantes2: RestaurantesEx4[] = [
  {
    nome: "Bar do Zé ",
    avaliacao: 3.5,
  },
  {
    nome: "Pizza Boa",
    avaliacao: 4.2,
  },
];

const qualMelhor1 = (rest1: RestaurantesEx4, rest2: RestaurantesEx4) => {
  let result = rest1.avaliacao > rest2.avaliacao ? rest1 : rest2;

  return `Restaurante: ${result.nome}, Avaliacao: ${result.avaliacao.toFixed(
    1
  )}`;
};

console.log(
  "EX 4, arquivo TypeScript \n \n",
  qualMelhor1(restaurantes2[0], restaurantes2[1])
);

const blabla: string = 'blabla'
