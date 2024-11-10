// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Cliente } from '../model/cliente';
// @Injectable({
//   providedIn: 'root'
// })
// export class ClienteService {

//   constructor(private http : HttpClient) { }
  
//   inserir(obj: Cliente) : string{
//     let mensagem = "";
//     this.http.post("http://localhost:8080/api/cliente", obj)
//     .subscribe(
//       {
//         next:(data) =>{
//           mensagem = "Cliente cadastrado com sucesso!";
//         },
//         error:(error) =>{
//           mensagem="Ocorreu um erro tente mais tarde";
//         }
//       }
//     );
//     return mensagem
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) { }

  inserir(obj: Cliente) : Observable<Object>{
    return this.http.post("http://localhost:8080/api/cliente", obj, { responseType: 'text' });
  }


  alterar(obj: Cliente) : Observable<Object> {
    return this.http.put("http://localhost:8080/api/cliente", obj, { responseType: 'text' });
  }

  pesquisar(codigo: number) : Observable<any> {
    return this.http.get("http://localhost:8080/api/cliente/"+ codigo, { responseType: 'text' });
  }

  remover(codigo: number) : Observable<any> {
    return this.http.delete("http://localhost:8080/api/cliente/"+ codigo, { responseType: 'text' });
  }
}
