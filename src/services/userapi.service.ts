import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";

export const API_ENDPOINTS = {
    HOST: "http://localhost:3000/",
    ALL_USERS: "users/"
}

@Injectable({
    providedIn: "root"
})
export class UserApiService {

    private httpClient = inject(HttpClient);

    public GetUsers(): Observable<User[]> {
        return this.httpClient.get(API_ENDPOINTS.HOST+API_ENDPOINTS.ALL_USERS) as Observable<User[]>;
    }

}