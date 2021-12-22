export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) { // se nao passar nada eh undefined nao falso
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S/]*?<\/script>/, ''); //troca as tags scripts por nada
        }
        this.elemento.innerHTML = template;
    }
}
