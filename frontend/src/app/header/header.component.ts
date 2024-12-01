import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})

export class HeaderComponent {
  public filtro: string = '';
  public userLogado:Cliente = new Cliente();

  constructor(private router: Router) {
    let clienteJSON = localStorage.getItem('cliente');
    if(clienteJSON != null){
      this.userLogado = JSON.parse(clienteJSON);
    }
    else{
      this.userLogado = new Cliente();
    }
  } 
  public fazerBusca() {
    if (this.filtro.trim()) {
      this.router.navigate(['/busca'], { queryParams: { q: this.filtro } });
    }
  }
   menuAberto = false;


  public IrCadastro() {
    this.router.navigate(['/cadastro']); 
  }

  public IrCesta() {
    this.router.navigate(['/cesta']); 
  }

  public IrVitrine() {
    this.router.navigate(['vitrine']); 
  }

  public IrLogin() {
    this.router.navigate(['/login']); 
  }
  
  public IrUserLogado(){
    this.router.navigate(['/usuario-logado']);
  }

  public userClick() {
    if (this.userLogado) {
      this.IrUserLogado();
    } else {
      this.IrLogin();
    }
  }


  public toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}