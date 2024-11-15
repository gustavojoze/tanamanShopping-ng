import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Seja Bem-Vindo á Tanaman";
  public lista: Produto[] = []

  constructor(private service : ProdutoService){
    this.carregarVitrine();
  }
  
  carregarVitrine(){
    this.service.listar().subscribe({
      next:(data) =>{this.lista = data},
      error:(msg) =>{this.mensagem="ocorreu um erro, volte mais tarde"}
    });
  }
  public verDetalhe(item:Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href="./detalhe";
  }

  public item: Produto = new Produto();
  public count: number = 0; 
  public mostrarCarrinho: boolean = false;
  public mostrarModalCarrinho: boolean = false;  

  // constructor() {
  //   let json = localStorage.getItem("produto");
  //   if (json != null) {
  //     this.item = JSON.parse(json);
  //   } else {
  //     this.mensagem = "Produto não encontrado!";
  //   }
  // }

  
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



  