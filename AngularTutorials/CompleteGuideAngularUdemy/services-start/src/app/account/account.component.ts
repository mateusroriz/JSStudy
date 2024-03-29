import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LoggingService, private accountsService: AccountsService){

  }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    // this.logginService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

}
