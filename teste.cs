using System;

class Program
{
    static void Main()
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
    }
}
