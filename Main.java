// EXERCIO 2
interface ObjetoClientEx2 {
    String nome;
    String endereco;
    String telefone;
  }
  
  class PedidosgEx2 {
    ObjetoClientEx2 cliente;
    int id;
  }
  
  public class Main {
    public static void main(String[] args) {
      ObjetoClientEx2 cliente = new ObjetoClientEx2();
      cliente.nome = "maria";
      cliente.endereco = "Rua B, 456";
  
      PedidosgEx2 pedidoEx23 = new PedidosgEx2();
      pedidoEx23.cliente = cliente;
      pedidoEx23.id = 666;
  
      String nume = "55550000";
      pedidoEx23.cliente.telefone = nume
        .trim()
        .replaceAll("[^0-9]", "")
        .replaceFirst("(\\d{4})(\\d{4})", "$1-$2");
  
      System.out.println("EX 2, arquivo Java");
      System.out.println(myFunctionJava(
        pedidoEx23.cliente.nome,
        pedidoEx23.cliente.endereco,
        pedidoEx23.id,
        pedidoEx23.cliente.telefone
      ));
    }
  
    public staliacao ? rest1 : rest2;
  
      return String.format("Restaurante: %s, Avaliacao: %