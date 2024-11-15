import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
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
  public lista: Produto[] =[]
  public termo: string = "";


  constructor(private service: ProdutoService, private route: ActivatedRoute){}

  pesquisar(){
    this.service.pesquisar(this.termo).subscribe({
      next:(data) =>{
        this.lista = data
        if(this.lista.length<=0){
          this.mensagem="nenhum produto encontrado!!";
        } else {
           this.mensagem= this.lista.length +" produto(s) encontrados com a palavra "+ this.termo;  
        }
      },
      error:(msg) =>{this.mensagem="ocorreu um erro, volte mais tarde"}
    });
  }


  // constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filtro = params['q'] || '';
    });
  }

  get produtosFiltrados(): Produto[] {
    if (!this.filtro) {
      return this.lista;
    }
    const filtroLower = this.filtro.toLowerCase();
    return this.lista.filter(produto =>
      produto.nome.toLowerCase().includes(filtroLower) ||
      produto.descricao.toLowerCase().includes(filtroLower) ||
      produto.keywords.toLowerCase().includes(filtroLower)
    );
  }

  public verDetalhe(item: Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";
  }


  public produtoSelecionado: Produto | null = null;

  public item: Produto = new Produto();
  public count: number = 0; 
  public mostrarCarrinho: boolean = false;
  public mostrarModalCarrinho: boolean = false;  



  
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


