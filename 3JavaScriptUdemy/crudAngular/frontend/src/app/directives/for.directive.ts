import { Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  //isso eh uma diretiva estrutural

  @Input("myForEm") numbers: number[]; //pegar o que vem depois da palavra chave 'em'

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
      //template eh o que quero aplicar dentro da minha diretiva, nesse caso <li> / queremos que dentro do contexto do template exista um valor implicito
    }
  }
}
