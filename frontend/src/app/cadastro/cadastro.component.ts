import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  public mensagem: string = "   Bem vindo à TANAMAN!\n Faça seu cadastro ou login.";
  public obj: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router) {
    this.carregar();
  }

  public gravar() {
    if (
      this.obj.nome != "" &&
      this.obj.email != "" &&
      this.obj.cpf != "" &&
      this.obj.telefone != "" &&
      this.obj.logradouro != "" &&
      this.obj.cep != "" &&
      this.obj.cidade != "" &&
      this.obj.senha != "" &&
      this.obj.confirmarSenha != ""
    ) {
      if (this.obj.senha === this.obj.confirmarSenha) {
        this.service.verificarCpf(this.obj.cpf).subscribe({
          next: (cpfExistente) => {
            if (cpfExistente) {
              this.mensagem = "Já existe um usuário com esse cpf";
            } else {
              this.service.verificarEmail(this.obj.email).subscribe({
                next: (emailExistente) => {
                  if (emailExistente) {
                    this.mensagem = "Já existe um usuário com esse email!";
                  } else {
                    this.service.inserir(this.obj).subscribe({
                      next: (data) => {
                        this.mensagem = "Parabéns! Seu cadastro foi realizado com sucesso!";
                        this.obj = new Cliente();
                      },
                      error: (err) => {
                        this.mensagem = "Ocorreu um problema, tente mais tarde!";
                        console.log(err);
                      },
                    });
                  }
                },
              });
            }
          },
        });
      } else {
        this.mensagem = "Senha e a confirmação devem ser iguais";
      }
    } else {
      this.mensagem = "Preencha todos os campos!!!";
    }
  }

  PasswordVisivel: boolean = false;
  public SenhaVisivel() {
    this.PasswordVisivel = !this.PasswordVisivel;
  }

  ConfirmaVisivel: boolean = false;
  public ConfirmaSenhaVisivel() {
    this.ConfirmaVisivel = !this.ConfirmaVisivel;
  }

  public carregar() {
    let json = localStorage.getItem("cadastro");
    console.log(this.obj);
    if (json == null) {
      this.router.navigate(['/login']); 
    } else {
      this.obj = new Cliente();
    }
  }
}
