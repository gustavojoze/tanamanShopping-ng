import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
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
  public obj: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) {}

  public fazerLogin() {
    if (this.obj.email === "" || this.obj.senha === "") {
      this.mensagem = "Preencha todos os campos";
      return;
    }
  
    this.clienteService.login(this.obj).subscribe({
      next: (cliente) => {
        if (cliente) {
          
          localStorage.setItem("loginMessage", `Bem-vindo, ${cliente.nome}!`);
          localStorage.setItem("cadastro", JSON.stringify(cliente));
          
          
          window.location.href = "./vitrine";
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

  public novoCadastro() {
    window.location.href = "./cadastro";
  }

  PasswordVisivel: boolean = false;
  public SenhaVisivel() {
    this.PasswordVisivel = !this.PasswordVisivel;
  }
}
