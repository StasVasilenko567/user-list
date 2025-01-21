import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-toolbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  
  private userSerice = inject(UserService);

  //Input Fields
  nameField: string = "";
  unField: string = "";

  public AddUser() {
    const tempU: User = {
      name: this.nameField,
      username: this.unField,
      id: -1
    }

    this.userSerice.createUser(tempU);
  }
}
