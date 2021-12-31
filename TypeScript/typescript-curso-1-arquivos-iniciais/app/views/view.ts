export abstract class View<T>{
    
    protected elemento:  HTMLElement;
    private escapar = false;

    constructor(seletor : string, escapar?: boolean){  //? eh parametro opcional
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM por favor verifique`);
        }
        if(escapar) { // se nao passar nada eh undefined nao falso
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string ; //metodo abstrato pra obrigar a sua declaracao nas classes filhas

    update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S/]*?<\/script>/, ''); //troca as tags scripts por nada
        }
        this.elemento.innerHTML = template;
    }
}