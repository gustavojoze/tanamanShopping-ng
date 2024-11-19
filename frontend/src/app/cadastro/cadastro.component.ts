
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
  public mensagem: string = "     Bem vindo á TANAMAN!\n Faça seu cadastrou ou login.";
  public obj: Cliente = new Cliente();

  constructor(private service: ClienteService){
    this.carregar();
  }



//   gravar(){
//     this.service.inserir(this.obj).subscribe({
//       next:(data)=>{this.mensagem="registrado inserido com sucesso!"},
//       error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
//  });
//   }
//   alterar(){
//       this.service.alterar(this.obj).subscribe({
//           next:(data)=>{this.mensagem="registrado alterado com sucesso!"},
//           error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
//      });
//   }
//   remover(){
//     this.service.remover(this.obj.codigo).subscribe({
//       next:(data)=>{this.mensagem="registrado removido com sucesso!"},
//       error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
//      });
//   }
//   pesquisar(){
//       this.service.pesquisar(this.obj.codigo).subscribe({
//         next:(data)=>{
//             if(data==null){
//               this.mensagem = "registro não encontrado!";
//             } else {
//               this.obj = data;
//               this.mensagem = "";
//             }
//         },
//         error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
//       });

//   }




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
                
          this.service.verificarEmailExistente(this.obj.email).subscribe({
            next: (emailExistente: boolean) => {
              if (emailExistente) {
                this.mensagem = "Já existe um usuário com esse email cadastrado!";
              } else {
                this.service.inserir(this.obj).subscribe({
                  next: (data) => {
                    this.mensagem = "Parabéns! Seu cadastro foi realizado com sucesso!";
                    this.obj = new Cliente(); 
                  },
                  error: (err) => {
                    this.mensagem = "Ocorreu um problema, tente mais tarde!";
                    console.log(err);
                  }
                });
                // Limpeza dos campos após cadastro
                this.obj.nome = "";
                this.obj.email = "";
                this.obj.cpf = "";
                this.obj.telefone = "";
                this.obj.logradouro = "";
                this.obj.complemento = "";
                this.obj.cep = "";
                this.obj.cidade = "";
                this.obj.senha = "";
                this.obj.confirmarSenha = "";
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
