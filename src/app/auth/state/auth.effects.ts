import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { ShareLoadingState } from "src/app/store/Shared/shared..actions";
import { loginDirec, loginStart, loginSuccess, LOGIN_FAIL, logonFail, signupStart, signUpSuccess } from "./auth.action";
@Injectable({
    providedIn: 'root'
})
export class AuthEffect {
    constructor(
        private action$: Actions,
        private authService: AuthService,
        private router: Router,
        private store: Store
    ) { }
    login$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(loginStart),
                switchMap((action: any) => {
                    return this.authService.login(action.email, action.password).pipe(
                        map(data => {
                            const users = this.authService.formatUser(data);
                            this.store.dispatch(ShareLoadingState({ status: false }))
                            return loginSuccess({ users });
                        })
                    )
                })
            )
        }
    )
    loginDirect = createEffect(
        () => {
            return this.action$.pipe(
                ofType(loginSuccess, signUpSuccess),
                tap(action => {
                    console.log(111, action)
                    console.log('chay vao day');
                    this.router.navigate(['/']);
                })
            )
        }, { dispatch: false }
    )
    signUp = createEffect(
        () => {
            return this.action$.pipe(
                ofType(signupStart),
                switchMap(res => {
                    return this.authService.signUp(res.email, res.password).pipe(
                        map(res => {
                            const users = res;
                            return signUpSuccess({ user: users, redirect: true });
                        })
                    )
                })
            )
        }
    )
}