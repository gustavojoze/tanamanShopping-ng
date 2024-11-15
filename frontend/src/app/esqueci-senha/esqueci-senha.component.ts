import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})

export class EsqueciSenhaComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();

  public reenviar(){
    if(this.obj.email === ""){
      this.mensagem = "Preencha o campo e-mail.";
    } else {
      this.mensagem = "As instruções foram enviada para o e-mail: " + this.obj.email;
    }
  }
}
