import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Seja Bem-Vindo á Tanaman";
  public lista: Produto[] = [
    {
      codigo: 1, 
      nome: "Ficus Lyrata", 
      descricao: "Planta ornamental de folhas largas e vistosas, ideal para ambientes internos com luz indireta. A Figueira Lira traz um toque sofisticado à decoração, exigindo rega moderada e espaço para crescer. Crescimento lento e altura média.",
      valor: 199.90, 
      quantidade: 35, 
      keywords: "planta ornamental, ficus, interior, Ficus Lyrata, Ficus, Lyrata"
    },
    {
      codigo: 2, 
      nome: "Angelonia Angustifolia", 
      descricao: "Planta perene de flores coloridas, ideal para jardins e vasos. Adaptável a climas quentes e com alta tolerância à seca. Suas flores vibrantes atraem polinizadores e florescem durante a primavera e verão.",
      valor: 34.90, 
      quantidade: 25, 
      keywords: "flores, jardim, perene, Angelonia Angustifolia, Angelonia, Angustifolia"
    },
    {
      codigo: 3, 
      nome: "Espada de São Jorge", 
      descricao: "Planta suculenta resistente, ideal para ambientes internos e externos. Conhecida por sua capacidade de purificar o ar e de baixa manutenção, a Espada de São Jorge se adapta bem a várias condições de luz.",
      valor: 29.90, 
      quantidade: 10, 
      keywords: "suculenta, purificador de ar, resistente, Espada de São Jorge, Espada, São Jorge"
    },
    {
      codigo: 4, 
      nome: "Callisia", 
      descricao: "Planta ornamental compacta, ideal para vasos e interiores. Suas folhas pequenas e verde-vibrantes criam um belo efeito visual em mesas ou prateleiras. Requer rega leve e ambientes com boa luminosidade.",
      valor: 24.90, 
      quantidade: 20, 
      keywords: "planta ornamental, interior, fácil cuidado, Callisia"
    },
    {
      codigo: 5, 
      nome: "Manacá da Serra", 
      descricao: "Arbusto nativo brasileiro de flores brancas e roxas, ideal para jardins. O Manacá da Serra é uma planta de rápido crescimento e floresce no verão, atraindo pássaros e borboletas. Requer luz solar direta e regas frequentes.",
      valor: 89.90, 
      quantidade: 45, 
      keywords: "arbusto, flores, jardim, Manacá da Serra, Manacá, Serra"
    },
    {
      codigo: 6, 
      nome: "Hibiscus", 
      descricao: "Planta tropical de flores grandes e vistosas. O Hibiscus é ideal para jardins ensolarados e vasos grandes, com flores em várias cores. Requer rega constante e sol pleno para seu melhor desenvolvimento.",
      valor: 39.90, 
      quantidade: 55, 
      keywords: "tropical, flores grandes, vaso, Hibiscus"
    },
    {
      codigo: 7, 
      nome: "Crisântemo", 
      descricao: "Planta de flores ornamentais em uma grande variedade de cores. Ideal para vasos e jardins, floresce no outono e requer sol direto e rega regular. Ótima para decoração interna e externa.",
      valor: 19.90, 
      quantidade: 50, 
      keywords: "flores ornamentais, outono, vaso, Crisântemo"
    },
    {
      codigo: 8, 
      nome: "Cacto Mandacaru", 
      descricao: "Cacto nativo do semiárido brasileiro, resistente à seca e fácil de cuidar. Suas hastes altas e espinhosas são uma excelente opção decorativa para ambientes internos e externos, requerendo pouca água.",
      valor: 59.90, 
      quantidade: 40, 
      keywords: "cacto, resistente, decoração, Cacto Mandacaru, Cacto, Mandacaru"
    },
    {
      codigo: 9, 
      nome: "Kalanchoe Dobrado", 
      descricao: "Planta suculenta com flores coloridas dobradas, ideal para ambientes internos e externos. Possui fácil manutenção, com flores que duram semanas. Requer rega moderada e luz indireta.",
      valor: 14.90, 
      quantidade: 30, 
      keywords: "suculenta, flores, interior, Kalanchoe Dobrado, Kalanchoe, Dobrado"
    },
    {
      codigo: 10, 
      nome: "Clusia Verde", 
      descricao: "Planta de folhas espessas e brilhantes, ideal para cercas vivas e paisagismo. A Clusia Verde cresce bem em sol pleno ou meia-sombra, com baixa necessidade de manutenção.",
      valor: 49.90, 
      quantidade: 1, 
      keywords: "paisagismo, folhas espessas, cerca viva, Clusia Verde, Clusia, Verde"
    },
    {
      codigo: 11, 
      nome: "Costela de Adão", 
      descricao: "Planta ornamental com folhas grandes e recortadas, ideal para ambientes internos e jardins sombreados. A Costela de Adão se adapta bem a luz indireta e ambientes úmidos, trazendo um toque tropical à decoração.",
      valor: 120.00, 
      quantidade: 1, 
      keywords: "ornamental, folhas recortadas, ambiente interno, Costela de Adão, Costela, Adão"
    },
    {
      codigo: 12, 
      nome: "Camarão Amarelo", 
      descricao: "Planta tropical com inflorescências amarelas que lembram camarões. Ideal para jardins tropicais e bordaduras, o Camarão Amarelo floresce bem em sol pleno ou meia-sombra, com moderada necessidade de rega.",
      valor: 35.00, 
      quantidade: 1, 
      keywords: "tropical, flores amarelas, jardim tropical, Camarão Amarelo, Camarão, Amarelo"
    }
    

  ]



  public verDetalhe(item:Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href="./detalhe";
  }

  public item: Produto = new Produto();
  public count: number = 0; 
  public mostrarCarrinho: boolean = false;
  public mostrarModalCarrinho: boolean = false;  

  constructor() {
    let json = localStorage.getItem("produto");
    if (json != null) {
      this.item = JSON.parse(json);
    } else {
      this.mensagem = "Produto não encontrado!";
    }
  }

  
    public adicionarCesta(item: Produto, event: MouseEvent) {  
     
      event.stopPropagation();
  
      let cesta = JSON.parse(localStorage.getItem("cesta") || '[]');
      let jsonCliente = localStorage.getItem("cadastro");
      let novaCesta: Cesta = new Cesta();
      let itemCesta: Item = new Item();
  
      if (cesta.length === 0) {
          itemCesta.codigo = item.codigo;
          itemCesta.produto = item;
          itemCesta.quantidade = 1;
          itemCesta.valor = item.valor;
          novaCesta.codigo = 1;
          novaCesta.total = item.valor;
          novaCesta.itens.push(itemCesta);
          if (jsonCliente != null) novaCesta.cliente = JSON.parse(jsonCliente);
      } else {
          let achou = false;
          novaCesta = cesta;
          for (let i = 0; i < novaCesta.itens.length; i++) {
              if (novaCesta.itens[i].codigo === item.codigo) {
                  novaCesta.itens[i].quantidade += 1;
                  novaCesta.itens[i].valor = novaCesta.itens[i].quantidade * novaCesta.itens[i].produto.valor;
                  achou = true;
                  break;
              }
          }
          if (!achou) {
              itemCesta.codigo = item.codigo;
              itemCesta.produto = item;
              itemCesta.quantidade = 1;
              itemCesta.valor = item.valor;
              novaCesta.itens.push(itemCesta);
          }
      }
  
      novaCesta.total = novaCesta.itens.reduce((total, it) => total + it.valor, 0);
      localStorage.setItem("cesta", JSON.stringify(novaCesta));
  
      this.count += 1;
      this.mostrarCarrinho = true;
      this.mostrarModalCarrinho = true;   
  }
  
  public fecharModalCarrinho() {
    this.mostrarModalCarrinho = false; 
  }

}



  