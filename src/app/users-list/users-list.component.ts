import { Component, OnInit } from '@angular/core';
import { UserManager } from '../../services/UserManager';
import { User } from '../../models/User';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private um: UserManager) {}

  ngOnInit() {
    this.users = this.um.GetAll();
  }
}
