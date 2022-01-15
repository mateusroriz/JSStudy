import { Injectable } from '@angular/core';


const KEY = 'token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(){
    return localStorage.getItem(KEY) ?? ''; //caso nao pegue o token retorne string em branco
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token);
  }

  excluiToken(){
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    return !!this.retornaToken(); //!! retorne um booleano se existe token ou nao
  }

}
