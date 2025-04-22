import { Injectable, signal } from "@angular/core";
import { User } from "./user.interface";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SignUpPageSerivce {
    constructor(
        private router: Router
    ) {

    }
    // private usersKey = 'angular-dummy-users';

    getOldUser(sessionKey: string) {
        // add user in db
        console.log("getOldUser", sessionKey);
        return localStorage.getItem(sessionKey);
    }

    addNewUser(userData: any) {
        // add user in db
        console.log("userData inside SignUpPageSerivce", userData);
        let usersKey = userData.email;
        let oldUSer =  this.getOldUser(usersKey);
        if(!oldUSer) {
            localStorage.setItem(usersKey, JSON.stringify(userData));
        } else {
            console.log("User Already Exists");
        }
        this.router.navigate(['/candidates']);

    }


}