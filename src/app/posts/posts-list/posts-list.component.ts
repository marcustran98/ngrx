import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPostSelector } from 'src/app/posts/state/post.selector';
import { deletePosts } from '../state/post.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts!: Observable<Array<any>>;
  constructor(private store: Store,
    private router: Router) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPostSelector);
  }
  remove() {
    // this.store
  }
  getById(data: any) {
    this.router.navigate(["/posts/", data.id]);
  }
  delete(id: number) {
    this.store.dispatch(deletePosts({ id }));
  }
}
