import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
