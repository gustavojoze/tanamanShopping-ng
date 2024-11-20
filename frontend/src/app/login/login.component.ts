import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public mensagem: string = "";
  public estaLogado: boolean = false;
  public obj: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.verificarEstaLogado();
  }

  public fazerLogin() {
    if (this.obj.email === "" || this.obj.senha === "") {
      this.mensagem = "Preencha todos os campos";
      return;
    }
  
    this.clienteService.login(this.obj).subscribe({
      next: (cliente) => {
        if (cliente) {
          
          localStorage.setItem("loginMessage", `Bem-vindo, ${cliente.nome}!`);
          localStorage.setItem('cliente', JSON.stringify(cliente));
          console.log(localStorage.getItem('cliente')); // Verifique se o cliente está salvo

      
          localStorage.setItem("cadastro", JSON.stringify(cliente));
          this.router.navigate(['/vitrine']);
          
        } else {
          this.mensagem = "E-mail ou senha inválidos!";
        }
      },
      error: (err) => {
        console.error(err);
        this.mensagem = "Erro ao realizar login. Tente novamente mais tarde.";
      },
    });
  }

  public verificarEstaLogado() {
    this.estaLogado = localStorage.getItem('cliente') !== null;
  }

  public novoCadastro() {
    window.location.href = "./cadastro";
  }

  PasswordVisivel: boolean = false;
  public SenhaVisivel() {
    this.PasswordVisivel = !this.PasswordVisivel;
  }
}
