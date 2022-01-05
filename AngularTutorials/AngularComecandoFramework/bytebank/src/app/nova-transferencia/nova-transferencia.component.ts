import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>(); //@Output eh decorator para compartilhar data entre componentes pais e filhos

  valor: number;
  destino: number;

  transferir() {
    console.log('solicitada nova transferencia');
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir); //emitindo os valores por meio do @Output
    this.limparCampos();
  }

  limparCampos(){
    this.valor = null;
    this.destino =null;
  }
}
