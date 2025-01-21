import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  constructor(
    private userService: UserService
  ) {}

  @Input() user: User | undefined;
  @Output() Delete: EventEmitter<void> = new EventEmitter();

  DeleteUser() {
    // this.userService.DeleteUser(this.user?.id as number);
    this.Delete.emit();
  }
}
