import { inject, Injectable } from "@angular/core";
import { User } from "./models/User";
import { BehaviorSubject, filter, Observable, Subject } from "rxjs";
import { UserApiService } from "./userapi.service";

// DEPRECATED
// type UserParams = {
//     name: string,
//     username: string,
//     phone?: string,
//     email?: string,
// }

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly usersStateSubject = new BehaviorSubject<User[]>([]);
    public readonly users$: Observable<User[]> = this.usersStateSubject.asObservable();

    private apiService = inject(UserApiService);

    public getUsers() {
        this.apiService.getUsers().subscribe(
            val => this.usersStateSubject.next(val)
        );
    }

    public deleteUser(id: number) {
        this.apiService.deleteUser(id).subscribe(
            val => this.usersStateSubject.next(this.usersStateSubject.getValue().filter(res => res.id !== val.id))
        );
    }

    public createUser(user: User) {
        this.apiService.createUser(user).subscribe(
            val => this.usersStateSubject.next([...this.usersStateSubject.getValue(), val])
        )
    }
}