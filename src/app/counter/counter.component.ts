import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from '../NgRx/selectors';
import { increment, decrement } from '../NgRx/actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }
}
