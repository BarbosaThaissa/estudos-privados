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

//EXERCIO 5
interface PertoEx5 {
  nome: string;
  tipo: string;
  distancia: number;
}

const pedidosPerto2: PertoEx5[] = [
  {
    nome: "Rafael",
    tipo: "Massa",
    distancia: 3.5,
  },
  {
    nome: "Maria",
    tipo: "humbuguer",
    distancia: 1.2,
  },
  {
    nome: "My",
    tipo: "Soverte",
    distancia: 4.9,
  },
];

const maisPerto1 = (
  pedido1: PertoEx5,
  pedido2: PertoEx5,
  pedido3: PertoEx5
) => {
  let result =
    pedido1.distancia < pedido2.distancia &&
    pedido1.distancia < pedido3.distancia
      ? pedido1
      : pedido2.distancia < pedido3.distancia
      ? pedido2
      : pedido3;

  return `O pedido mais próximo é o de ${result.nome}, do tipo ${result.tipo}`;
};

console.log(
  "EX 5, arquivo TypeScript \n \n",
  maisPerto1(pedidosPerto2[0], pedidosPerto2[1], pedidosPerto2[2])
);

const str: string[] = ["blaba", "claca", "dlada", "elaea"];
