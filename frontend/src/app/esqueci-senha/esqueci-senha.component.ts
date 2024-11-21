import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-esqueci',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();
  public emailCadastrado:string = "";

  constructor(private clienteService: ClienteService) {}

  public reenviar() {
    if (this.emailCadastrado !== "" && this.emailCadastrado !== null) {
     

    this.obj.email = this.emailCadastrado;
    this.clienteService.esquecerSenha(this.obj).subscribe({
      next: (cliente: Cliente) => {
        if (cliente) {
          this.mensagem = `As instruções para redefinição de senha foram enviadas para o e-mail: ${this.obj.email}`;
        } else {
          this.mensagem = "Não existe um usuário com esse e-mail cadastrado.";
        }
      },
      error: (err) => {
        console.error(err);
        this.mensagem = "Ocorreu um erro ao verificar o e-mail. Tente novamente mais tarde.";
      },
    });
  }else {
    this.mensagem = "Por favor, insira um e-mail.";
  }
  }
}
