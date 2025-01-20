import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaceholderUser, User } from '../../models/User';
import { UserManager } from '../../services/UserManager';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  constructor(private um: UserManager) {}

  @Input() user: User = PlaceholderUser();
  @Output() RefreshEmit: EventEmitter<void> = new EventEmitter();

  DeleteUser() {
    this.um.DeleteUser(this.user.id);
    this.RefreshEmit.emit();
  }
}
