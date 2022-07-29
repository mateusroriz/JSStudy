import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>(); //criando objeto que pode ser enviado para o pai
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string; serverContent: string}> ();
  newServerName = "";
  newServerContent = "";
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent }) //enviando para o pai
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent })

  }
}
