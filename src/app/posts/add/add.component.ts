import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { addPosts } from 'src/app/posts/state/post.actions';
import { ShareLoadingState } from 'src/app/store/Shared/shared..actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  constructor(private store: Store) {
    this.addForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  submitForm() {
    const postObject: Post = {
      title: this.addForm.value.title,
      desc: this.addForm.value.desc,
      id: Math.ceil(Math.random() * 100)
    }
    this.store.dispatch(ShareLoadingState({ status: true }));
    this.store.dispatch(addPosts({ posts: postObject }));
  }
}
