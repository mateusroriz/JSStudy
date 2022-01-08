import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>(); //@Output eh decorator para compartilhar dados entre componentes pais e filhos

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('solicitada nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionarTransferencia(valorEmitir).subscribe(
      (resultado) => {
        //POST: usando Subscribe no metodo Observable adicionarTransf para enviar mudancas quando ocorrerem
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    ); // no caso de erro no subscribe printar o valor na tela
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
