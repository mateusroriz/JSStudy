 export function logarTempoDeExecucao(){
     return function(
         target: any,
         propertyKey: string, //nome do metodo
         descriptor: PropertyDescriptor
     ){
        const metodoOriginal = descriptor.value; //colocando o metodo original em uma variavel
        descriptor.value = function(...args: Array<any>){ //deixando qlq quantidade de parametros de qlq tipo passar
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args); //chamando a execucao do metodo original com apply e passando o contexto e os parametro
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao: ${(t2-t1)/1000} segundos`);
            retorno; //retornando o retorno do metodo original dentro do decorator
        }

        return descriptor;
     }
 }
