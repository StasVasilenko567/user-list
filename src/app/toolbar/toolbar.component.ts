import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(
    private userService: UserService
  ) {}

  //Input Fields
  nameField: string = "";
  unField: string = "";

  @Output() refresh: EventEmitter<void> = new EventEmitter<void>();

  // AddUser() {
  //   this.userService.AddUser({name: this.nameField, username: this.unField});
  //   this.refresh.emit();
  // }
}
