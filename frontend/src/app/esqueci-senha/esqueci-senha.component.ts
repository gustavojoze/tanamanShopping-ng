import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

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
  public emailCadastrado: string = "";

  constructor(private service: ClienteService, private router: Router) {}

  public reenviar() {
    this.service.verificarEmail(this.obj.email).subscribe({
      next: (emailExistente) => {
        if (!emailExistente) {
          this.mensagem = "Email não cadastrado";
        } else if (this.obj.email === "") {
          this.mensagem = "Preencha o campo e-mail.";
        } else {
          console.log(this.obj.email);
          this.service.esqueciSenha(this.obj).subscribe({
            next: (response: any) => {
              if (response.token) {
                this.router.navigate(['/redefinir-senha'], {
                  queryParams: { email: this.obj.email, token: response.token }
                });
              } else {
                this.mensagem = "Erro desconhecido.";
              }
            },
            error: (err) => {
              if (err.status === 404) {
                this.mensagem = "E-mail não encontrado, verifique!!";
              } else {
                this.mensagem = "Erro ao processar a solicitação.";
              }
              console.error(err);
            }
          });
        }
      },
      error: (err) => {
        this.mensagem = "Erro ao verificar e-mail.";
        console.error(err);
      }
    });
  }
}
