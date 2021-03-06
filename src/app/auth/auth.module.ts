import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { AuthEffect } from './state/auth.effects';
import { AuthReducer } from './state/auth.reducer';
import { authFeature, AUTH_STATE_NAME } from './state/auth.selector';
import { SignUpComponent } from './sign-up/sign-up.component';

const authRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            }
        ]
    },
]
@NgModule({
    declarations: [LoginComponent, SignUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(authRoutes),
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffect])
    ],
    providers: [],
})
export class AuthModule { }
