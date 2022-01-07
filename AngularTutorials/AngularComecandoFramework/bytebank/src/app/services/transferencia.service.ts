import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private listaTransferencia: Array<any>;

  constructor() {
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }

  adicionarTransferencia(transferencia: any){
    this.adicionarData(transferencia);
    this.listaTransferencia.push(transferencia); //enviando as transferencias para o array
  }

  private adicionarData(transferencia: any){
    transferencia.data = new Date();
  }
}
