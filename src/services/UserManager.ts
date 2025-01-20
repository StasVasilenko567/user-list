import { Injectable } from "@angular/core";
import { User } from "../models/User";

type UserParams = {
    name: string,
    username: string,
    phone?: string,
    email?: string,
}

@Injectable({
    providedIn: 'root'
})
export class UserManager {
    private _users: Map<number, User>;
    private _last_id: number = 0;

    constructor() {
        this._users = new Map();
    }

    AddUser(new_user: UserParams): void {
        this._last_id++;
        
        const tempU: User = {
            id: this._last_id, 
            name: new_user.name, 
            username: new_user.username, 
            phone: new_user.phone, 
            email: new_user.email
        }
        
        this._users.set(this._last_id, tempU);
    }

    DeleteUser(userId: number) {
        if (!this._users.has(userId)) {
            throw new Error("current user doesn't exists!");
        }
        this._users.delete(userId);
    }

    GetAll(): User[] {
        return Array.from(this._users.values());
    }
}