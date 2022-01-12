import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() //quando ele eh usado eh criado um atributo chamado mensagem e nesse atributo vamos passar a mensagem para o componente
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
