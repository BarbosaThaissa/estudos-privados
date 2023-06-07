using System;
using System.Text.RegularExpressions;

// EXERCIO 2
interface IObjetoClientEx2
{
    string Nome { get; set; }
    string Endereco { get; set; }
    string Telefone { get; set; }
}

class ClienteEx2 : IObjetoClientEx2
{
    public string nome { get; set; }
    public string Nome { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    public string endereco { get; set; }
    public string Endereco { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    public string telefone { get; set; }
    public string Telefone { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Olá, mundo!");
        // Obter os números do usuário
        Console.Write("Digite o primeiro número: ");
        double numero1 = Convert.ToDouble(Console.ReadLine());

        Console.Write("Digite o segundo número: ");
        double numero2 = Convert.ToDouble(Console.ReadLine());

        Console.Write("Digite o terceiro número: ");
        double numero3 = Convert.ToDouble(Console.ReadLine());

        // Calcular a média
        double media = (numero1 + numero2 + numero3) / 3;

        // Exibir o resultado
        Console.WriteLine("A média dos três números é: " + media);

        ClienteEx2 cliente = new()
        {
            nome = "maria",
            endereco = "Rua B, 456"
        };

        PedidosgEx2 pedidoEx23 = new()
        {
            Cliente = cliente,
            id = 666
        };

        string nume = "55550000";
        string telefoneFormatado = Regex.Replace(nume.Trim(), "[^0-9]", "")
            .Replace(@"(\d{4})(\d{4})", "$1-$2");

        pedidoEx23.Cliente.telefone = telefoneFormatado;

        Console.WriteLine("EX 2, arquivo C#\n");
        Console.WriteLine(MyFunctionCSharp(
            pedidoEx23.Cliente.nome,
            pedidoEx23.Cliente.endereco,
            pedidoEx23.id,
            pedidoEx23.Cliente.telefone
        ));

        // EXERCIO 4
        RestaurantesEx4[] restaurantes2 = {
            new RestaurantesEx4 { nome = "Bar do Zé", avaliacao = 3.5 },
            new RestaurantesEx4 { nome = "Pizza Boa", avaliacao = 4.2 }
        };

        Console.WriteLine("\nEX 4, arquivo C#\n");
        Console.WriteLine(QualMelhor1(restaurantes2[0], restaurantes2[1]));
    }

    static string MyFunctionCSharp(string client, string end, int id, string tel)
    {
        return $"Cliente: {client}, {end} \n ID: {id} \n Tel: {tel}";
    }

    class PedidosgEx2
    {
        internal int id;

        public ClienteEx2 Cliente { get; set; }
        public int Id { get; set; }
    }

    class RestaurantesEx4
    {
        internal string nome;
        internal double avaliacao;

        public string Nome { get; set; }
        public double Avaliacao { get; set; }
    }

    static string QualMelhor1(RestaurantesEx4 rest1, RestaurantesEx4 rest2)
    {
        RestaurantesEx4 result = rest1.avaliacao > rest2.avaliacao ? rest1 : rest2;

        return $"Restaurante: {result.nome}, Avaliacao: {result.avaliacao:F1}";
    }

    private string GetDebuggerDisplay()
    {
        return ToString();
    }
}
