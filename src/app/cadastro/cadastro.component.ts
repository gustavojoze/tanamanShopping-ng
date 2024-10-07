
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  public mensagem: string = "     Bem vindo á TANAMAN!\n Faça seu cadastrou ou login.";
  public obj: Cliente = new Cliente();

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
            localStorage.setItem("cadastro", JSON.stringify(this.obj));
            this.mensagem = "Parabéns! Seu cadastro foi realizado com sucesso!";
        } else {
            this.mensagem = "Senha e a confirmação devem ser iguais";
        }
    } else {
        this.mensagem = "Preencha todos os campos!!!";
    }
  }

  PasswordVisivel: boolean = false;
  public SenhaVisivel(){
    this.PasswordVisivel = !this.PasswordVisivel;
  }
  
  ConfirmaVisivel: boolean = false;
  public ConfirmaSenhaVisivel(){
    this.ConfirmaVisivel = !this.ConfirmaVisivel;
  }

  public carregar(){
    let json = localStorage.getItem("cadastro");
    if(json == null){
      window.location.href="./login"
    } else {
      this.obj = JSON.parse(json);
    }
  }

  constructor(){
    this.carregar();
  }
}
