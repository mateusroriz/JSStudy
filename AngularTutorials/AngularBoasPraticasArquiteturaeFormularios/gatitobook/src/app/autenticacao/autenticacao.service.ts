import { environment } from './../../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

  const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService ) { }
  //observable eh como uma promise em javascript
  // eh um objeto que quando a requisicao completar ele vai retornar o objeto definido dentro do observable
  autenticar(usuario: string, senha:string): Observable<HttpResponse<any>>{
      return this.httpClient.post(`${API}/user/login`, {
        userName: usuario,
        password: senha,
      },
      {
        observe: 'response'} //informando que tmb quer o header da requisicao
      ).pipe( //fazer uma operacao para salvar o token no servico
        tap((response) => { //retorna uma funcao para gravar o token
          const authToken = response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken); //salvando o token no local storage
        })
      )
  }
}
