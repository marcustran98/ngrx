import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";
import { User } from "src/app/models/Users.model";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess, LOGIN_FAIL, logonFail } from "./auth.action";
@Injectable({
    providedIn: 'root'
})
export class AuthEffect {
    constructor(private action$: Actions, private authService: AuthService) {
        console.log(555);
    }
    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            switchMap((action: any) => {
                return this.authService.login(action.email, action.password).pipe(
                    map(data => {
                        const users = this.authService.formatUser(data);
                        return loginSuccess({ users });
                    })
                )
            })
        )

    })
}