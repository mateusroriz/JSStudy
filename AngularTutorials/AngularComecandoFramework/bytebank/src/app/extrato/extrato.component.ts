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
    this.transferenciasReceber = this.service.getTransferencias; //usando o metodo get de service de transferencias para pegar o valor
  }
}