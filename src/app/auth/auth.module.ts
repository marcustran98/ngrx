import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { AuthReducer } from './state/auth.reducer';
import { AUTH_STATE_NAME } from './state/auth.selector';

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
            }
        ]
    },
]
@NgModule({
    declarations: [LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(authRoutes),
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        ReactiveFormsModule
    ],
    providers: [],
})
export class AuthModule { }
