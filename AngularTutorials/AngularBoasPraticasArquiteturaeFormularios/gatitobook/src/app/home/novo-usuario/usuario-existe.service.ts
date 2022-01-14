import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  //isso eh uma injecao dentro do construtor
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      //isso retorna um observable que representa esse valor diferente da assincrona
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => // o switchMap recebe o nome que o usuario esta digitando e converte isso pra uma requisicao do backend
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario) // isso retorna ou true ou false
          ),
          map((usuarioExiste) =>  usuarioExiste ? {usuarioExistente: true} : null //usando estupidez de ternario seForVerdadeiro ? seForFalso
          ),
            first() //depois da requisicao fecha o observable
        );
    };
  }
}
