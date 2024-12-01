import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { CestaService } from '../service/cesta.service';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {
  public mensagem: string = "Sua cesta";
  public cesta: Cesta = new Cesta();
  public total: number = 0;

  constructor(private service: CestaService) {
    this.carregarCesta();
  }

  /**
   * Carrega a cesta do armazenamento local e atualiza o total.
   */
  private carregarCesta() {
    const json = localStorage.getItem("cesta");
    if (json) {
      this.cesta = JSON.parse(json);
      this.atualizarTotal();
    } else {
      this.mensagem = "Carrinho vazio, adicione novos itens!";
    }
  }

  /**
   * Atualiza o valor total da cesta.
   */
  private atualizarTotal() {
    this.total = this.cesta.itens.reduce((total, item) => total + (item.quantidade * item.produto.valor), 0);
    this.cesta.total = this.total; // Atualiza também na cesta
  }

  /**
   * Grava o pedido na API.
   */
  public gravarPedido() {
    if (this.cesta.itens.length === 0) {
      this.mensagem = "Carrinho vazio! Adicione itens antes de realizar o pedido.";
      return;
    }

    const jsonCliente = localStorage.getItem("cliente");
    if (jsonCliente) {
      this.cesta.cliente = JSON.parse(jsonCliente);
      this.service.gravarPedido(this.cesta).subscribe({
        next: (novoPedido) => {
          console.log("Novo pedido", novoPedido)
          this.gravarItens(novoPedido);
        },
        error: () => {
          this.mensagem = "Ocorreu um erro ao gravar o pedido, tente novamente.";
        }
      });
    } else {
      this.mensagem = "Faça o login para gravar o pedido!";
    }
  }

  /**
   * Grava os itens de um pedido.
   */
  gravarItens(novoPedido: Cesta){
    for(let obj of this.cesta.itens){
        obj.codigoCesta = novoPedido.codigo
    }
    this.service.gravarItens(this.cesta.itens).subscribe({
      next:(data)=>{
        this.limparCompra(novoPedido);
      },
      error: () => {
        this.mensagem = "Erro ao gravar itens do pedido, tente novamente.";
      }
    });
  }

  /**
   * Remove um item da cesta.
   */
  public removerItem(item: Item) {
    const index = this.cesta.itens.findIndex(i => i.codigo === item.codigo);
    if (index !== -1) {
      const itemEncontrado = this.cesta.itens[index];
      if (itemEncontrado.quantidade > 1) {
        itemEncontrado.quantidade--;
      } else {
        this.cesta.itens.splice(index, 1);
      }

      this.atualizarTotal();
      this.salvarCesta();
    }

    if (this.cesta.itens.length === 0) {
      this.mensagem = "Carrinho vazio, adicione novos itens!";
      this.limpar();
    }
  }

  /**
   * Limpa a cesta e o armazenamento local.
   */

  private limparCompra(novoPedido: Cesta) {
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = `Compra realizada com sucesso! Pedido nº ${novoPedido.codigo}`;
  }
  
  public limpar() {
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.total = 0;
    this.mensagem = "Carrinho vazio, adicione novos itens!";
  }

  /**
   * Salva a cesta no armazenamento local.
   */
  private salvarCesta() {
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
  }
}
