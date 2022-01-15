import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});   //toda vez que algum componente faz um subscribe nesse observable ele envia o ultimo dado que estava nele

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){ //se o usuario ja existir notificar os componentes q ele ja existe
      this.decodificaJWT();
    }
   }

  private  decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario); //todo mundo q se inscreveu *nesse* service vai receber o usuario
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable(); //observable para objetos de fora nao manipularem o estado do behaviorSubject
  }

  salvaToken(token: string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({}); //avisar a todos que deram subscribe que nao existe mais usuario
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

}
