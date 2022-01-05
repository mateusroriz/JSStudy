import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;


  transferir($event) {
    console.log($event); //recebendo o valor do evento e dando console.log
    this.transferencia = $event;
  }
}
