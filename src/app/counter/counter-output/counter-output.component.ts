import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounterValue, getTextCounter } from '../state/counter.selecter';
import { ConterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  newText!: string;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(getCounterValue).subscribe(res => {
      this.counter = res;
    })
    this.store.select(getTextCounter).subscribe(res => {
      this.newText = res;
    })
  }

}
