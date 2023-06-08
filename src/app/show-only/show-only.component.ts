import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from '../NgRx/selectors';

@Component({
  selector: 'app-show-only',
  templateUrl: './show-only.component.html',
  styleUrls: ['./show-only.component.css']
})
export class ShowOnlyComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }
}
