import { Acao, AcoesAPI } from './modelo/acoes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes() {
    return this.httpClient.get<AcoesAPI>('http://localhost:3000/acoes') //isso eh um observable
      .pipe(
        tap((valor) => console.log(valor)), //printando o que esta passando no pipe
        pluck('payload'), //extraindo o payload e deixando apenas as acoes
        map((acoes) => //esse eh o map do observable ele pertence ao rxjs nao o do js
            acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))
        )
      );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    }
    if (acaoA.codigo < acaoB.codigo) {
      return -1;
    }
    return 0;
  }
}
