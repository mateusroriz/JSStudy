import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() //injectable quer dizer q eh service
export class AutenticacaoInterceptor implements HttpInterceptor { //objetivo eh interceptar toda a requisicao http que sai do front end e podemos manipular ela antes de ir pro servidor

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.possuiToken()){
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      request = request.clone({headers}); //a requisicao request nao pode ser alterado apenas clonado e modificado
    }

    return next.handle(request);
  }
}
