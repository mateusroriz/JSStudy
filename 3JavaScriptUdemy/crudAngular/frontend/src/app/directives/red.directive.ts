import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  //usando injecao de dependencia / isso eh uma diretiva de atributo
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
