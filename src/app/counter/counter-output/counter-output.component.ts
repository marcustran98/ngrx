import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$!: Observable<{ counter: number }>;
  constructor(private store: Store<{ counter: ConterState }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select("counter");
  }

}
