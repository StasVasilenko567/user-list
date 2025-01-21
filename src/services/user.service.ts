import { inject, Injectable } from "@angular/core";
import { User } from "../models/User";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { UserApiService } from "./userapi.service";

type UserParams = {
    name: string,
    username: string,
    phone?: string,
    email?: string,
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // private users: Map<number, User>;
    // private lastId: number = 0;

    private readonly usersStateSubject = new BehaviorSubject<User[]>([]);
    public readonly users$: Observable<User[]> = this.usersStateSubject.asObservable();

    private apiService = inject(UserApiService);

    public GetUsers() {
        this.apiService.GetUsers().subscribe(
            val => this.usersStateSubject.next(val)
        );
    }

    // constructor() {
    //     this.users = new Map();
    // }

    // public AddUser(new_user: UserParams): void {
    //     this.lastId++;
        
    //     const tempU: User = {
    //         id: this.lastId, 
    //         name: new_user.name, 
    //         username: new_user.username, 
    //         phone: new_user.phone, 
    //         email: new_user.email
    //     }
        
    //     this.users.set(this.lastId, tempU);
    // }

    // public DeleteUser(userId: number) {
    //     if (!this.users.has(userId)) {
    //         throw new Error("current user doesn't exists!");
    //     }
    //     this.users.delete(userId);
    // }

    // public GetAll(): User[] {
    //     return Array.from(this.users.values());
    // }
}