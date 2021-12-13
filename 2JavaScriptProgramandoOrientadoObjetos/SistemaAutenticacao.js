//ser autenticavel significa ter um metodo autenticar()
//duck type

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){ 
            return autenticavel.autenticar(senha);  //procura pela funcao autenticar e retorna true se a senha passada corresponde a senha do objeto passado
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&  //procurando pela chave autenticar dentro do objeto passado
        autenticavel.autenticar instanceof Function; //checando se a chave autenticar dentro de autenticavel eh uma funcao   
    }
}