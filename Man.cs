using System;
using System.Text.RegularExpressions;

// EXERCIO 2
interface ObjetoClientEx2
{
    string nome { get; set; }
    string endereco { get; set; }
    string telefone { get; set; }
}

class ClienteEx2 : ObjetoClientEx2
{
    public string nome { get; set; }
    public string endereco { get; set; }
    public string telefone { get; set; }
}

class Program2
{
    static void Main(string[] args)
    {
        ClienteEx2 cliente = new ClienteEx2
        {
            nome = "maria",
            endereco = "Rua B, 456"
        };

        PedidosgEx2 pedidoEx23 = new PedidosgEx2
        {
            cliente = cliente,
            id = 666
        };

        string nume = "55550000";
        string telefoneFormatado = Regex.Replace(nume.Trim(), "[^0-9]", "")
            .Replace(@"(\d{4})(\d{4})", "$1-$2");

        pedidoEx23.cliente.telefone = telefoneFormatado;

        Console.WriteLine("EX 2, arquivo C#\n");
        Console.WriteLine(myFunctionCSharp(
            pedidoEx23.cliente.nome,
            pedidoEx23.cliente.endereco,
            pedidoEx23.id,
            pedidoEx23.cliente.telefone
        ));

        // EXERCIO 4
        RestaurantesEx4[] restaurantes2 = {
            new RestaurantesEx4 { nome = "Bar do Zé", avaliacao = 3.5 },
            new RestaurantesEx4 { nome = "Pizza Boa", avaliacao = 4.2 }
        };

        Console.WriteLine("\nEX 4, arquivo C#\n");
        Console.WriteLine(qualMelhor1(restaurantes2[0], restaurantes2[1]));
    }

    static string myFunctionCSharp(string client, string end, int id, string tel)
    {
        return $"Cliente: {client}, {end} \n ID: {id} \n Tel: {tel}";
    }

    class PedidosgEx2
    {
        public ClienteEx2 cliente { get; set; }
        public int id { get; set; }
    }

    class RestaurantesEx4
    {
        public string nome { get; set; }
        public double avaliacao { get; set; }
    }

    static string qualMelhor1(RestaurantesEx4 rest1, RestaurantesEx4 rest2)
    {
        RestaurantesEx4 result = rest1.avaliacao > rest2.avaliacao ? rest1 : rest2;

        return $"Restaurante: {result.nome}, Avaliacao: {result.avaliacao.ToString("F1")}";
    }
}
