import { Component, ViewChild } from '@angular/core';
import { UserManager } from '../services/UserManager';
import { UsersListComponent } from './users-list/users-list.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [UsersListComponent, ToolbarComponent],
  providers: [UserManager],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private um: UserManager) {
    this.um.AddUser({name: "Peter", username: "OK"});
    this.um.AddUser({name: "Vazgen", username: "V"});
  }

  @ViewChild(UsersListComponent, {static: false})
  private ul_component: UsersListComponent | undefined;

  RefreshContainer() {
    this.ul_component?.ngOnInit();
  }
}
