import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./counter/counter.module').then(module => module.CounterModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(module => module.CounterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
