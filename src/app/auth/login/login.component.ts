import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { concat, Observable, of } from 'rxjs';
import { concatMap, exhaust, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { loginStart, loginSuccess } from '../state/auth.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }
  abc() {
    return of([1, 2, 3, 4, 5, 7]) as Observable<any>;
  }
  ngOnInit(): void {
  }
  submitForm() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(loginStart({ email, password }));
  }
}
