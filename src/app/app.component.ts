import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { UserApiService } from '../services/userapi.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersListComponent, ToolbarComponent],
  providers: [UserApiService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(private userService: UserService) {
  //   this.userService.AddUser({name: "Peter", username: "OK"});
  //   this.userService.AddUser({name: "Vazgen", username: "V"});
  // }

  // @ViewChild(UsersListComponent, {static: false})
  // private ul_component: UsersListComponent | undefined;

  // RefreshContainer() {
  //   this.ul_component?.ngOnInit();
  // }

  // private userService = inject(UserService);

  // ngOnInit(): void {
  //   this.userService.GetUsers();
  // }

}
