import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""],
      confirm_password: [""]
    })
  }

  ngOnInit(): void {
  }
  submitForm() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.store.dispatch(signupStart({ email, password }))
  }
  subjject() {
    const subject = new BehaviorSubject(1); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);
    // subject.next(3);
    // subject.next(4);

    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // subject.next(5);
  }
}
