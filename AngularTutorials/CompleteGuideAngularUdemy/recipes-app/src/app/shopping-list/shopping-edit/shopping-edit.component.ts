import { Ingredient } from './../../shared/ingredient.model';
import {Component, ElementRef, EventEmitter, OnInit,Output,ViewChild,} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) ammountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName  = this.nameInputRef.nativeElement.value;
    const ingAmount = this.ammountInputRef.nativeElement.value;
    const newIgredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIgredient);
  }
}
