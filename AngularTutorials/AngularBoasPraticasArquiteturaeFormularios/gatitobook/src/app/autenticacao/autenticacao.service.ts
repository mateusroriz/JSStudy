import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient ) { }
  //observable eh como uma promise em javascript
  // eh um objeto que quando a requisicao completar ele vai retornar o objeto definido dentro do observable
  autenticar(usuario: string, senha:string): Observable<any>{
      return this.httpClient.post('http://localhost:3000/user/login', {
        userName: usuario,
        password: senha,
      });
  }
}
