import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.interval = setInterval(() => {
      //isso eh a funcao que e executada a cada intervalo
      this.intervalFired.emit(this.lastNumber + 1);
      return this.lastNumber++;
    }, 1000);
  }

  onGamePause(){
    clearInterval(this.interval);
  }
}
