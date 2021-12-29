export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) { //propertyKey eh o atributo no qual o decorator foi colocado
        console.log(`modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function () {
            if(!elemento){ // se o elemento nao estiver sido atribuido ainda //nao vai ter sido atribuido na primeira vez
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do Dom com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
             return elemento; //retornando elemento do DOM 
        }

        Object.defineProperty( //adicionado a propertyKey um getter pelo prototype
            target,
            propertyKey,
            { get: getter }
        );
    }
}