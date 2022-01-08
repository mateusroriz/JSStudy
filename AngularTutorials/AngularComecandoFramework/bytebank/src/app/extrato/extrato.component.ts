import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferenciasReceber: Array<any>;

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.getTodasTransferencias().subscribe((transferencias: Array<any>) => { //como getTodasTransferencias eh observable usando subscribe para receber valores dela
        console.table(transferencias);
        this.transferenciasReceber = transferencias; //colocando os valores recebeidos pelo service no array de extrato
      });
  }
}
