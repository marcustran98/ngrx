import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from "rxjs/operators";
import { Post } from 'src/app/models/posts.model';
import { updatePosts } from '../state/post.actions';
import { getPostById } from '../state/post.selector';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  addForm!: FormGroup;
  model!: Post;
  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private store: Store) {
    this.activeRoute.paramMap.pipe(
      map((params: any) => params.get("id")),
    ).subscribe(res => {
      const x = this.store.select(getPostById, res).subscribe((res: any) => {
        this.model = res;
      })
    })
    this.addForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required])
    })
  }
  ngOnInit(): void {
  }
  updateForm() {
    const postObject: Post = {
      title: this.addForm.value.title,
      desc: this.addForm.value.desc,
      id: this.model.id
    }
    this.store.dispatch(updatePosts({ value: postObject }));
  }

}
