import { Injectable, signal } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SignInPageSerivce {
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

    validateUser(userData: any) {
        // add user in db
        console.log("userData inside SignUpPageSerivce", userData);
        let usersKey = userData.email;
        let oldUSer =  this.getOldUser(usersKey);
        if(!oldUSer) {
            console.log("User Does Not Exists");
        } else {
            this.router.navigate(['/candidates']);
        }

    }


}