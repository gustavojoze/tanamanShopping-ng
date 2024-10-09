import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})

export class CestaComponent {
  public mensagem: string = "Sua cesta";
  public cesta: Cesta = new Cesta();
  public mostrarConfirmacao: boolean = false; 

  constructor(){
    let json = localStorage.getItem("cesta");
    if(json!=null) {
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Cesta vazia, adicione novos itens!";
    }
  }

  public removerItem(obj: Item) {
    let itemEncontrado = this.cesta.itens.find(item => item.codigo === obj.codigo);
  
    if (itemEncontrado) {
      if (itemEncontrado.quantidade > 1) {
        itemEncontrado.quantidade--;
        itemEncontrado.valor = itemEncontrado.quantidade * itemEncontrado.produto.valor;
      } 
      else {
        this.cesta.itens = this.cesta.itens.filter(item => item.codigo !== obj.codigo);
      }
        this.cesta.total = this.cesta.itens.reduce((total, item) => total + item.valor, 0);
        localStorage.setItem("cesta", JSON.stringify(this.cesta));
    }
      if (this.cesta.itens.length === 0) {
      this.mensagem = "Cesta vazia, adicione novos itens!";
      localStorage.removeItem("cesta");
    }
  }

  public limparCesta(){
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = "Cesta vazia, adicione novos itens!";
  }

  public finalizarCompra() {
    this.mensagem = "Compra finalizada com sucesso!";
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mostrarConfirmacao = false;
  }
}