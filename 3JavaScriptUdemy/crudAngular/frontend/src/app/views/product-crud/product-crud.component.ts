import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router) {} // o angular que vai criar/instanciar eh o angular por injecao de depedencia

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
