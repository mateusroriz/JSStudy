import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.user = {
    id: this.activeRoute.snapshot.params['id'], //snapshot so carrega na primeira vez que o arquivo eh acessado
    name: this.activeRoute.snapshot.params['name']
    }
   this.paramsSubscription =  this.activeRoute.params //params is observable // params esta sendo inscrito quando o ngOnInit roda
    .subscribe((params: Params)=>{ // mudando a informacao do usuario sempre que a mesma for mudada na rota
      this.user.id = params['id'];
      this.user.name = params['name']
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe() // nao eh necessario, o angular faz isso pra vc, mas eh importante fazer
  }

}
