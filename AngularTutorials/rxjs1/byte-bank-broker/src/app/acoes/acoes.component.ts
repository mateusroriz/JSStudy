import { switchMap, tap } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl(); //formulario do tipo reativo
  todasAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => { console.log('Fluxo Inicial');
    })
  );

  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => { console.log('fluxo do filtro');
    }),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)) //o switchMap para o antigo fluxo e troca com o novo fluxo que representa a requisicao da api
  ); //usando um pipe para trocar o fluxo de dados da digitacao para o fluxo de dados do httpclient

  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);

  constructor(private acoesService: AcoesService) {}
}
