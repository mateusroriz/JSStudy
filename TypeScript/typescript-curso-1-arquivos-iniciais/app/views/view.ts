export abstract class View<T>{
    
    protected elemento:  HTMLElement;

    constructor(seletor : string){
        this.elemento = document.querySelector(seletor);
    }

    abstract template(model: T): string ; //metodo abstrato pra obrigar a sua declaracao nas classes filhas

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}