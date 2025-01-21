import { Component, inject, Input, Output } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  
  private userService = inject(UserService);

  @Input() user: User | undefined;

  DeleteUser() {
    this.userService.deleteUser(this.user?.id as number);
  }
}
