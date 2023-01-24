import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id)
  }

}
