import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, customText } from '../state/counter.action';
import { getTextCounter } from '../state/counter.selecter';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  text: string = '';
  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
    this.store.select(getTextCounter).subscribe((res) => {
      console.log(11, res);
      this.text = res;
    })
  }
  onAdd() {
    this.store.dispatch(customIncrement({ value: this.value }))
  }
  changText() {
    this.store.dispatch(customText({ text: this.text }))
  }
}
