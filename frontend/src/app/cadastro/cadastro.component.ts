
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  public mensagem: string = "Bem vindo á TANAMAN!\n Faça seu cadastrou ou login.";
  public obj: Cliente = new Cliente();

  constructor(private service: ClienteService){
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
          //  localStorage.setItem("cadastro", JSON.stringify(this.obj));
                
          this.service.verificarEmail(this.obj.email).subscribe({
            next: (emailExistente) => {
              if (emailExistente) {
                this.mensagem = "Já existe um usuário com esse email ou cpf cadastrado!";
              } else {
                this.service.inserir(this.obj).subscribe({
                  next: (data) => {
                    this.mensagem = "Parabéns! Seu cadastro foi realizado com sucesso!";
                    // this.obj.nome = "";
                    // this.obj.email = "";
                    // this.obj.cpf = "";
                    // this.obj.telefone = "";
                    // this.obj.logradouro = "";
                    // this.obj.complemento = "";
                    // this.obj.cep = "";
                    // this.obj.cidade = "";
                    // this.obj.senha = "";
                    // this.obj.confirmarSenha = "";
                  this.obj = new Cliente()
                  },
                  error: (err) => {
                    this.mensagem = "Ocorreu um problema, tente mais tarde!";
                    console.log(err);
                  }
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


}
