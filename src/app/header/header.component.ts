import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FormsModule]
})

export class HeaderComponent {
  public filtro: string = '';

  constructor(private router: Router) {} 
  public fazerBusca() {
    if (this.filtro.trim()) {
      this.router.navigate(['/busca'], { queryParams: { q: this.filtro } });
    }
  }
   menuAberto = false;


  public IrCadastro() {
    window.location.href = "./cadastro";
  }

  public IrCesta() {
    window.location.href = "./cesta"
  }

  public IrVitrine() {
    window.location.href = "./vitrine"
  }
  public IrLogin() {
    window.location.href = "./login"
  }



  public toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}