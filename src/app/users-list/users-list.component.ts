import { Component, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { UserCardComponent } from '../user-card/user-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent, AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit, OnDestroy {

  public userService = inject(UserService);

  ngOnInit(): void {
    this.userService.GetUsers();
  }

  ngOnDestroy(): void {
    
  }
}

// TODO

// Пользователи должны быть внутри этого компонента (не в виде сервиса)