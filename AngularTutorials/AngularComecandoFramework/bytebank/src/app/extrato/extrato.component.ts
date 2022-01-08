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
    this.service.getTodasTransferencias().subscribe((transferencias: Array<any>) =>{
        console.table(transferencias);
        this.transferenciasReceber = transferencias;
    })
  }
}
