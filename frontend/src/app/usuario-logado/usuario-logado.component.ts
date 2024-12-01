import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-logado.component.html',
  styleUrl: './usuario-logado.component.css'
})

export class UsuarioComponent {
  public mensagem: string = " Bem vindo à TANAMAN!\n Altere seus dados abaixo.";
  public obj: Cliente = new Cliente();
  estaLogado: boolean = false;

  constructor(private service: ClienteService, private router: Router){
    this.carregar();
  }
  
  ngOnInit(): void {
   
    this.verificaLogado();
    if (this.estaLogado) {
      console.log(localStorage.getItem('cliente')); 
      this.service.pesquisar(this.obj.codigo).subscribe({
        next: (data) => {

          this.obj = data;
        },
        error: (err) => {
          this.mensagem = "Erro ao carregar dados do cliente!";
        }
      });
    } else {
      this.router.navigate(['/login']); 
    }
  }
  verificaLogado(): void {
    this.estaLogado = localStorage.getItem('cliente') !== null;
  }
  

  public gravar() {
    if (
        this.obj.nome != "" &&
        this.obj.email != "" &&
        this.obj.cpf != "" &&
        this.obj.telefone != "" &&
        this.obj.logradouro != "" &&
        this.obj.cep != "" &&
        this.obj.cidade != "" 
    ) {
      
          //  localStorage.setItem("cadastro", JSON.stringify(this.obj));
                
                this.service.alterar(this.obj).subscribe({
                  next: (data) => {
                    this.mensagem = "Parabéns! Sua atualização foi realizada com sucesso!";
              
                  },
                  error: (err) => {
                    this.mensagem = "Ocorreu um problema, tente mais tarde!";
                    console.log(err);
                  }
                });
                
              
            
        } else {
            this.mensagem = "Senha e a confirmação devem ser iguais";
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

  public deslogar() {
    localStorage.removeItem('cliente');
    this.estaLogado = false;  
    localStorage.removeItem('cesta');
    this.router.navigate(['/vitrine']); 
  }

  public carregar(){
    let json = localStorage.getItem("cadastro");
    if(json == null){
      this.router.navigate(['/login']); 
    } else {
      this.obj = JSON.parse(json);
    }
  }


}

