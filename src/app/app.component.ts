import { Component, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { GETLOADING } from './store/Shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showLoading!: Observable<boolean>;
  @ViewChildren("okoko") dowloadFile!: QueryList<any>;
  constructor(private store: Store<AppState>) {
  }
  ngOnInit() {
    this.showLoading = this.store.select(GETLOADING)
  }
  clickMe() {
    // console.log(this.dowloadFile.toArray());
    // const a = this.dowloadFile.toArray()
    // // const key = Object.keys()
    // for (let i in a) {
    //   console.log(1);
    //   a[i].nativeElement.click();
    // }
    // window.location = 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg'
  }
}
