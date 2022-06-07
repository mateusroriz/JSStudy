import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  visible = false;
  arrayNumber = [];
  constructor() {}

  ngOnInit(): void {}

  showDetails() {
    this.visible = !this.visible;
    // this.arrayNumber.push(this.arrayNumber.length+1);
    this.arrayNumber.push(new Date());
  }

}
