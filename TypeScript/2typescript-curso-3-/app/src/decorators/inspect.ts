export function inspect(
    target: any,  // se o decorator for colocado num metodo estatico o target vai ser a funcao constructor, se for um metodo de instancia vai ser no prototype
    propertyKey: string, // nome do metodo
    descriptor: PropertyDescriptor //tem a referencia do metodo
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        console.log(`---Metodo: ${propertyKey}`);
        console.log(`-----Parametros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`---retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}
