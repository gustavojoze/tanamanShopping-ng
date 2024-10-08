import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  public mensagem: string = "Seja Bem-Vindo á Tanaman";
  public filtro: string = ""
  public lista: Produto[] = 

    [
  {
    "codigo": 1,
    "nome": "Ficus Lyrata",
    "descricao": "Planta ornamental de folhas largas e vistosas, ideal para ambientes internos com luz indireta. A Figueira Lira traz um toque sofisticado à decoração, exigindo rega moderada e espaço para crescer. Crescimento lento e altura média.",
    "valor": 199.90,
    "quantidade": 35,
    "keywords": "planta ornamental, Figueira Lira, decoração de interiores, folhas largas, luz indireta, crescimento lento, planta sofisticada, vaso grande, rega moderada"
  },
  {
    "codigo": 2,
    "nome": "Angelonia Angustifolia",
    "descricao": "Planta perene de flores coloridas, ideal para jardins e vasos. Adaptável a climas quentes e com alta tolerância à seca. Suas flores vibrantes atraem polinizadores e florescem durante a primavera e verão.",
    "valor": 34.90,
    "quantidade": 25,
    "keywords": "flores perenes, Angelonia, jardim de verão, flores coloridas, tolerante à seca, atrai polinizadores, florescimento sazonal, vaso de flores"
  },
  {
    "codigo": 3,
    "nome": "Espada de São Jorge",
    "descricao": "Planta suculenta resistente, ideal para ambientes internos e externos. Conhecida por sua capacidade de purificar o ar e de baixa manutenção, a Espada de São Jorge se adapta bem a várias condições de luz.",
    "valor": 29.90,
    "quantidade": 10,
    "keywords": "Espada de São Jorge, planta suculenta, purificador de ar, planta resistente, baixa manutenção, interior e exterior, adaptação a luz, decoração"
  },
  {
    "codigo": 4,
    "nome": "Callisia",
    "descricao": "Planta ornamental compacta, ideal para vasos e interiores. Suas folhas pequenas e verde-vibrantes criam um belo efeito visual em mesas ou prateleiras. Requer rega leve e ambientes com boa luminosidade.",
    "valor": 24.90,
    "quantidade": 20,
    "keywords": "planta compacta, Callisia Repens, decoração de interiores, fácil cuidado, pouca água, vaso de mesa, planta ornamental"
  },
  {
    "codigo": 5,
    "nome": "Manacá da Serra",
    "descricao": "Arbusto nativo brasileiro de flores brancas e roxas, ideal para jardins. O Manacá da Serra é uma planta de rápido crescimento e floresce no verão, atraindo pássaros e borboletas. Requer luz solar direta e regas frequentes.",
    "valor": 89.90,
    "quantidade": 45,
    "keywords": "Manacá, Manacá da Serra, arbusto nativo, flores perfumadas, rápido crescimento, atrai pássaros, borboletas, planta de jardim, planta de sol"
  },
  {
    "codigo": 6,
    "nome": "Hibiscus",
    "descricao": "Planta tropical de flores grandes e vistosas. O Hibiscus é ideal para jardins ensolarados e vasos grandes, com flores em várias cores. Requer rega constante e sol pleno para seu melhor desenvolvimento.",
    "valor": 39.90,
    "quantidade": 55,
    "keywords": "Hibisco, planta tropical, flores grandes, vaso grande, jardim ensolarado, planta de sol, flores vistosas"
  },
  {
    "codigo": 7,
    "nome": "Crisântemo",
    "descricao": "Planta de flores ornamentais em uma grande variedade de cores. Ideal para vasos e jardins, floresce no outono e requer sol direto e rega regular. Ótima para decoração interna e externa.",
    "valor": 19.90,
    "quantidade": 50,
    "keywords": "Crisântemo, flores ornamentais, vaso de outono, decoração de interiores, flores coloridas, planta de sol"
  },
  {
    "codigo": 8,
    "nome": "Cacto Mandacaru",
    "descricao": "Cacto nativo do semiárido brasileiro, resistente à seca e fácil de cuidar. Suas hastes altas e espinhosas são uma excelente opção decorativa para ambientes internos e externos, requerendo pouca água.",
    "valor": 59.90,
    "quantidade": 40,
    "keywords": "Mandacaru, cacto decorativo, planta resistente, clima seco, baixa manutenção, decoração de interiores e exteriores"
  },
  {
    "codigo": 9,
    "nome": "Kalanchoe Dobrado",
    "descricao": "Planta suculenta com flores coloridas dobradas, ideal para ambientes internos e externos. Possui fácil manutenção, com flores que duram semanas. Requer rega moderada e luz indireta.",
    "valor": 14.90,
    "quantidade": 30,
    "keywords": "Kalanchoe, suculenta florida, flores de longa duração, planta de vaso, planta de luz indireta, flores coloridas"
  },
  {
    "codigo": 10,
    "nome": "Clusia Verde",
    "descricao": "Planta de folhas espessas e brilhantes, ideal para cercas vivas e paisagismo. A Clusia Verde cresce bem em sol pleno ou meia-sombra, com baixa necessidade de manutenção.",
    "valor": 49.90,
    "quantidade": 1,
    "keywords": "Clusia, paisagismo, folhas espessas, cerca viva, planta de baixa manutenção, sol pleno, meia-sombra"
  },
  {
    "codigo": 11,
    "nome": "Costela de Adão",
    "descricao": "Planta tropical com folhas grandes e recortadas, ideal para ambientes internos. A Costela de Adão é uma ótima opção para quem busca uma planta de destaque com baixa manutenção, exigindo rega moderada e luz indireta.",
    "valor": 89.90,
    "quantidade": 5,
    "keywords": "Costela de Adão, planta tropical, folhas grandes, decoração interna, baixa manutenção, luz indireta, planta de destaque"
  },
  {
    "codigo": 12,
    "nome": "Camarão Amarelo",
    "descricao": "Planta ornamental com flores amarelas vibrantes em formato de camarão. Ideal para jardins e vasos, o Camarão Amarelo requer sol pleno e rega regular para florescer durante o ano todo.",
    "valor": 34.90,
    "quantidade": 12,
    "keywords": "Camarão Amarelo, planta ornamental, flores amarelas, planta de jardim, vaso de flores, planta de sol pleno, florescimento anual"
  }
]

  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filtro = params['q'] || '';
    });
  }


  public verDetalhe(item:Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href="./detalhe";
  }
  
  public mostrarModal: boolean = false;
  public mostrarModalCarrinho: boolean = false;
  public produtoSelecionado: Produto | null = null;

  public adicionarCesta(item: Produto) {
    this.produtoSelecionado = item;
    this.mostrarModal = true;
  }

  public confirmarAdicao(obj: Produto | null) {
    if (obj) {
      let cesta = JSON.parse(localStorage.getItem("cesta") || '[]');
      let jsonCliente = localStorage.getItem("cadastro");
      let novaCesta: Cesta = new Cesta();
      let item: Item = new Item();
  
      if (cesta.length === 0) {
        item.codigo = obj.codigo;
        item.produto = obj;
        item.quantidade = 1;
        item.valor = obj.valor;
        novaCesta.codigo = 1;
        novaCesta.total = obj.valor;
        novaCesta.itens.push(item);
        if (jsonCliente != null) novaCesta.cliente = JSON.parse(jsonCliente);
      } else {
        let achou = false;
        novaCesta = cesta;
        for (let i = 0; i < novaCesta.itens.length; i++) {
          if (novaCesta.itens[i].codigo === obj.codigo) {
            novaCesta.itens[i].quantidade += 1;
            novaCesta.itens[i].valor = novaCesta.itens[i].quantidade * novaCesta.itens[i].produto.valor;
            achou = true;
            break;
          }
        }
        if (!achou) {
          item.codigo = obj.codigo;
          item.produto = obj;
          item.quantidade = 1;
          item.valor = obj.valor;
          novaCesta.itens.push(item);
        }
      }
  
      novaCesta.total = novaCesta.itens.reduce((total, it) => total + it.valor, 0);
      localStorage.setItem("cesta", JSON.stringify(novaCesta));
      this.mostrarModalCarrinho = true;
      this.fecharModal();
    }
  }  
  

  public cancelarAdicao() {
    this.fecharModal();
  }

  public fecharModal() {
    this.mostrarModal = false;
    this.produtoSelecionado = null;
  }

  public fecharModalCarrinho() {
    this.mostrarModalCarrinho = false;
  }
}
