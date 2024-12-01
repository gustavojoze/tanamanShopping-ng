
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/cliente'; 

  constructor(private http : HttpClient) { }

  verificarEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/verificar-email/${email}`);
  }

  verificarCpf(cpf: string): Observable<boolean>{
    return this.http.get<boolean>(`${this.apiUrl}/verificar-cpf/${cpf}`);
  }

  esquecerSenha(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8080/api/cliente/esqueci-senha", cliente);
  }
  
  inserir(obj: Cliente) : Observable<Object>{
    return this.http.post("http://localhost:8080/api/cliente", obj, { responseType: 'text' });
  }


  alterar(obj: Cliente) : Observable<Object> {
    return this.http.put("http://localhost:8080/api/cliente", obj, { responseType: 'text' });
  }

  pesquisar(codigo: number) : Observable<any> {
    return this.http.get("http://localhost:8080/api/cliente/"+ codigo);
  }

  remover(codigo: number) : Observable<any> {
    return this.http.delete("http://localhost:8080/api/cliente/"+ codigo, { responseType: 'text' });
  }

  login(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8080/api/cliente/login", obj);
  }

  esqueciSenha(obj: Cliente): Observable<any> {
    return this.http.post("http://localhost:8080/api/cliente/recupera", obj);
  }

  redefinirSenha(email: string, novaSenha: string, token: string) {
    return this.http.post("http://localhost:8080/api/cliente/redefinir", { email, novaSenha, token });
  }

}
