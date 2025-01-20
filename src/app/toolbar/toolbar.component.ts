import { Component, EventEmitter, Output } from '@angular/core';
import { UserManager } from '../../services/UserManager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private um: UserManager) {}

  //Input Fields
  nameField: string = "";
  unField: string = "";

  @Output() refresh: EventEmitter<void> = new EventEmitter<void>();

  AddUser() {
    this.um.AddUser({name: this.nameField, username: this.unField});
    this.refresh.emit();
  }
}
