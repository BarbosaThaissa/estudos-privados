public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
        
        int resultado = multiplicar(5, 3);
        System.out.println("O resultado da multiplicação é: " + resultado);
    }
    
    public static int multiplicar(int num1, int num2) {
        return num1 * num2;
    }
}
