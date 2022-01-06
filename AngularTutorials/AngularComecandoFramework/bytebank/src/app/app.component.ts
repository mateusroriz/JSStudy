import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];


  receber($event) {
    console.log($event); //recebendo o valor do evento e dando console.log
    const transferencia = {...$event, data: new Date} //scrap operator desmonta o array em suas propriedade
    this.transferencias.push(transferencia); //enviando as transferencias para o array
  }
}
