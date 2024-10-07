import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})

export class DetalheComponent {
  public mensagem: string ="";
  public item: Produto = new Produto();
  constructor(){
    let json = localStorage.getItem("produto");
    if (json != null) {
      this.item = JSON.parse(json);
    } else {
      this.mensagem = "Produto não encontrado!"
    }
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