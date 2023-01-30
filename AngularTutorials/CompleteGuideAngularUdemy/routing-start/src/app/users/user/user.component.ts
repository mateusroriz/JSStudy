import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.user = {
    id: this.activeRoute.snapshot.params['id'], //snapshot so carrega na primeira vez que o arquivo eh acessado
    name: this.activeRoute.snapshot.params['name']
    }
    this.activeRoute.params //params is observable // params esta sendo inscrito quando o ngOnInit roda
    .subscribe((params: Params)=>{ // mudando a informacao do usuario sempre que a mesma for mudada na rota
      this.user.id = params['id'];
      this.user.name = params['name']
    });
  }

}
