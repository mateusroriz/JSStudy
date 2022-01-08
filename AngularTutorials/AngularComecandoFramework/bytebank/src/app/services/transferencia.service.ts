import { Transferencia } from './../../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: Array<any>;
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get getTransferencias() {
    return this.listaTransferencia;
  }

  getTodasTransferencias(): Observable<Array<Transferencia>> {
    return this.httpClient.get<Array<Transferencia>>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.adicionarData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private adicionarData(transferencia: any) {
    transferencia.data = new Date(); //adicionando dinamicamente o campo data para a transferencia com a data de hoje
  }
}
