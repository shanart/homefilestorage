import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "./models";
import { SharedModule } from "./shared.module";


@Injectable({
    providedIn: SharedModule,
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<User> {
        return this.http.get<User>("/api/v1/auth/account");
    }
}