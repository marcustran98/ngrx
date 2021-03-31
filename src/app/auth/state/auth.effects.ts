import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
@Injectable({
    providedIn: 'root'
})
export class AuthEffect {
    constructor(private action$: Actions, private authService: AuthService) {

    }
    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            mergeMap((action: any) => {
                console.log(11, action);
                return this.authService.login(action.email, action.password).pipe(
                    map(data => {
                        return loginSuccess();
                    })
                )
            })
        )
    })
    logout = createEffect(() => {
        return this.action$.pipe(
            ofType(loginSuccess),
            map(value => value)
        )
    }).subscribe(res => {
        console.log(5, res);
    })
}