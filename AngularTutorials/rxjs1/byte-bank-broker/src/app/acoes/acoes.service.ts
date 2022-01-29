import { Acao, AcoesAPI } from './modelo/acoes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes(valor?: string) { // ? eh quando o parametro e opcional
    const params = valor ? new HttpParams().append('valor', valor) : undefined; //se um valor for passado adiciona ele no Httpparams se nao deixar ele como undefined

    return this.httpClient.get<AcoesAPI>('http://localhost:3000/acoes', {params}) //isso eh um observable e ele tambem recebe parametros caso existam
      .pipe(
        tap((valor) => console.log(valor)),
        pluck('payload'), //extraindo o payload e deixando apenas as acoes
        map((acoes) => //esse eh o map do observable ele pertence ao rxjs nao eh o  do js
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
