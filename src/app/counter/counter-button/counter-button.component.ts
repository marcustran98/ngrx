import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {


  constructor(private store: Store<{ counter: { counter: number } }>) {

  }

  ngOnInit(): void {
  }
  onIncrease() {
    this.store.dispatch(increment());
  }
  onDecrease() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }

}
