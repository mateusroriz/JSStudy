import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup){
  const username = formGroup.get('userName')?. value ?? ''; //se for undefined passe isso como vazio
  const password = formGroup.get('password')?. value ?? '';

  if(username.trim() + password.trim()){
    return username !== password ? null: {senhaIgualUsuario: true}; //outro ternario estupido, se for diferentes retorne null se nao retorne senhaIgualUsuario true
  }else{
    return null; //se os dois estiverem vazios
  }

}
