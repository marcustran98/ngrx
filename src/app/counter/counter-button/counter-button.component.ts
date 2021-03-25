import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement1, increment1, reset1 } from '../state/counter.action';
import { ConterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {


  constructor(private store: Store<{ counter: ConterState }>) {

  }

  ngOnInit(): void {
  }
  onIncrease() {
    this.store.dispatch(increment1());
  }
  onDecrease() {
    this.store.dispatch(decrement1());
  }
  onReset() {
    this.store.dispatch(reset1());
  }

}
