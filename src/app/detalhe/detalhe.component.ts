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
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {
  public mensagem: string = "";
  public item: Produto = new Produto();
  public count: number = 0; // Contador para o carrinho
  public mostrarCarrinho: boolean = false; // Controla o display do elemento

  constructor() {
    let json = localStorage.getItem("produto");
    if (json != null) {
      this.item = JSON.parse(json);
    } else {
      this.mensagem = "Produto não encontrado!";
    }
  }

  public adicionarCesta(item: Produto) {
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

    // Incrementa o contador e exibe o carrinho
    this.count += 1;
    this.mostrarCarrinho = true;
  }
}
