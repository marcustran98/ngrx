import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { postsReducer } from './state/post.reducer';
import { AddComponent } from './add/add.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { EditComponent } from './edit/edit.component';

const postRoutes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
            {
                path: 'add',
                component: AddComponent
            },

            {
                path: ":id",
                component: EditComponent
            }
        ]
    },
]
@NgModule({
    declarations: [
        AddComponent,
        PostsListComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(postRoutes),
        ReactiveFormsModule
    ],
    providers: [],
})
export class PostsModule { }
